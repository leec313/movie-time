// Setting the index to 0 so that the below variable matches up with the question index
let currentQuestionIndex = 0;
//Setting score to 0 to start the game
let score = 0;
let incorrect = 0;

function welcome() {
  //Hiding the score div if it's 0
  document.getElementById("score-container").style.display = "none";
  document.getElementById("incorrect-container").style.display = "none";
  // Hiding the current category and submit button until the function is called
  document.getElementById("current-category").style.display = "none";
  document.getElementById("submit-btn").style.display = "none";

  //Getting the category buttons from the index.html and assigning them to variables
  let comedyButton = document.getElementById("comedy-btn");
  let actionButton = document.getElementById("action-btn");
  let horrorButton = document.getElementById("horror-btn");
  //adding event listeners to each button to run the selected game type
  comedyButton.addEventListener("click", () => runGame("comedy"));
  actionButton.addEventListener("click", () => runGame("action"));
  horrorButton.addEventListener("click", () => runGame("horror"));

  let welcomeContainer = document.getElementById('quiz-container');
  let messageHeading = document.createElement("h2");
  let message = document.createElement('p');
  messageHeading.setAttribute('id', 'welcome-heading');
  message.setAttribute('id', 'welcome-p');
  messageHeading.innerHTML = 'Welcome!';
  message.innerHTML = 'Choose a category above to begin the quiz'
  welcomeContainer.appendChild(messageHeading);
  welcomeContainer.appendChild(message);
}

// Function used to display the questions
function displayQuestions(questions) {

  let welcomeHeading = document.getElementById("welcome-heading");
  welcomeHeading.remove();
  let welcomeP = document.getElementById("welcome-p");
  welcomeP.remove();

  // Getting the elements from the index.html in order to create the buttons
  let questionElement = document.getElementById("question-container");
  let optionsElement = document.getElementById("options-container");
  // Making submit button visible after function is called
  document.getElementById("submit-btn").style.display = "block";
  let nextButton = document.getElementById("submit-btn");



  // Creates a restart button so that the user can restart the game while playing
  let restartButton = document.createElement("button");
  restartButton.setAttribute('id', 'restart');
  restartButton.innerText = "Restart";
  document.body.appendChild(restartButton);
  restartButton.addEventListener("click", restartGame);

  nextButton.removeEventListener("click", nextQuestion);
  nextButton.addEventListener("click", () => checkAnswer(questions, questionElement, optionsElement, nextButton));


  showQuestion(questions, questionElement, optionsElement, nextButton);
}

// Function to show each question and push the html buttons/display to the index.html
function showQuestion(questions, questionElement, optionsElement, nextButton) {

  let currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  let optionIndex = 0;
  while (optionIndex < currentQuestion.options.length) {
    let optionElement = document.createElement("button");
    optionElement.classList.add("option");
    optionElement.textContent = currentQuestion.options[optionIndex];
    optionsElement.appendChild(optionElement);

    optionElement.addEventListener("click", () => selectOption(event, optionsElement));

    optionIndex++;
  }
  nextButton.textContent = "Next";

  //hiding the score if 0 and displaying it if more than 0
  if (score <= 0) {
    document.getElementById("score-container").style.display = "none";
  } else {
    document.getElementById("score-container").style.display = "block";
  }

  //hiding the incorrects if 0 and displaying it if more than 0
  if (incorrect <= 0) {
    document.getElementById("incorrect-container").style.display = "none";
  } else {
    document.getElementById("incorrect-container").style.display = "block";
  }
}

// Function used to track which option is being selected by the user
function selectOption(event, optionsElement) {
  let selectedOption = event.target;
  let options = Array.from(optionsElement.getElementsByClassName("option"));

  // Adds "selected" to the class for the option that is selected
  options.forEach((option) => {
    option.classList.remove("selected");
  });

  // Removes the selected class when moving onto the next question
  selectedOption.classList.add("selected");
}

// Function for the next question
function nextQuestion(questions, questionElement, optionsElement, nextButton) {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions, questionElement, optionsElement, nextButton);
  } else {
    questionElement.textContent = "Quiz ended!";
    optionsElement.innerHTML = "";
    nextButton.textContent = "Play Again";
    // removing both event listeners so that the button does not run the unnecessary functions
    nextButton.removeEventListener("click", nextQuestion);
    nextButton.removeEventListener("click", checkAnswer);
    // Add event listener for restarting the game
    nextButton.addEventListener("click", restartGame);
    // Hiding the restart button as the play again button will restart the game
    document.getElementById("restart").style.display = "none";
  }
}

// Checks the user's selected option with the correct option by accessing the dictionaries in the array below
function checkAnswer(questions, questionElement, optionsElement, nextButton) {
  currentQuestion = questions[currentQuestionIndex];
  let selectedOption = document.querySelector(".selected");

  // if correct, adds to score | if incorrect, adds to incorrect | otherwise, produces alert to user
  if (selectedOption && selectedOption.textContent === currentQuestion.answer) {
    score++;
    let scoreElement = document.getElementById("score-container");
    scoreElement.textContent = "Score: " + score;
    // Calling the showCorrectAnswer function so we can clear the textContent since the answer was correct
    showCorrectAnswer(selectedOption);
    // Moves onto the next question once check is complete
    nextQuestion(questions, questionElement, optionsElement, nextButton);
  } else if (selectedOption && selectedOption.textContent != currentQuestion.answer) {
    incorrect++;
    let scoreElement = document.getElementById("incorrect-container");
    scoreElement.textContent = "Incorrect: " + incorrect;
    // Calling the showCorrectAnswer function since the user got it incorrect and we need to show them the previous answer
    showCorrectAnswer(selectedOption);
    // Moves onto the next question once check is complete
    nextQuestion(questions, questionElement, optionsElement, nextButton);
  } else if (currentQuestionIndex < questions.length) { // error handling - if no option was selected, user gets feedback and game remains on same question
    displayError();
    throw "No option selected";
  }
}

// Restarts game
function restartGame() {
  // Reload the current document to restart the game
  location.reload();
}

// Function to shuffle an array using Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// This function holds the game data and assigns the correct game type depending on the user choice
function runGame(gameType) {
  let questions;
  hideCatagories();
  showPlaying(gameType);
  if (gameType === "comedy") {
    currentQuestionIndex = 0;
    questions = [
      {
        question: "Who played the main character in the movie 'Dumb and Dumber'?",
        options: ["Jim Carrey", "Will Ferrell", "Adam Sandler", "Eddie Murphy"],
        answer: "Jim Carrey"
      },
      {
        question: "In the movie 'Anchorman: The Legend of Ron Burgundy', which city does Ron Burgundy work in?",
        options: ["Los Angeles", "New York City", "San Diego", "Chicago"],
        answer: "San Diego"
      },
      {
        question: "What is the name of the comedy movie series about a group of friends and their misadventures in Las Vegas?",
        options: ["The Hangover", "Superbad", "Bridesmaids", "Ted"],
        answer: "The Hangover"
      },
      {
        question: "Which actor played the character Michael Scott in the TV series 'The Office'?",
        options: ["Steve Carell", "Jason Bateman", "Seth Rogen", "Will Ferrell"],
        answer: "Steve Carell"
      },
      {
        question: "Which actor portrayed the character Ron Burgundy in the movie 'Anchorman: The Legend of Ron Burgundy'?",
        options: ["Will Ferrell", "Steve Carell", "Paul Rudd", "David Koechner"],
        answer: "Will Ferrell"
      },
      {
        question: "Who directed the comedy film 'Bridesmaids'?",
        options: ["Paul Feig", "Judd Apatow", "Adam McKay", "Seth Rogen"],
        answer: "Paul Feig"
      },
      {
        question: "Which actress played the character Elle Woods in the comedy film 'Legally Blonde'?",
        options: ["Reese Witherspoon", "Cameron Diaz", "Jennifer Aniston", "Kate Hudson"],
        answer: "Reese Witherspoon"
      },
      {
        question: "What is the name of the comedy film series that follows the lives of three buddies and their exploits in college?",
        options: ["American Pie", "Old School", "Animal House", "Neighbors"],
        answer: "American Pie"
      },
      {
        question: "In the movie 'Zoolander', which actor plays the titular character, a dimwitted male model?",
        options: ["Ben Stiller", "Owen Wilson", "Will Ferrell", "Vince Vaughn"],
        answer: "Ben Stiller"
      },
      {
        question: "Which comedy film features a character named Austin Powers, an international man of mystery?",
        options: ["Austin Powers: International Man of Mystery", "Anchorman: The Legend of Ron Burgundy", "Dodgeball: A True Underdog Story", "Step Brothers"],
        answer: "Austin Powers: International Man of Mystery"
      }
    ];
  } else if (gameType === "action") {
    currentQuestionIndex = 0;
    questions = [
      {
        question: "Which actor portrayed the character John Wick in the movie series 'John Wick'?",
        options: ["Keanu Reeves", "Tom Cruise", "Chris Hemsworth", "Brad Pitt"],
        answer: "Keanu Reeves"
      },
      {
        question: "In the movie 'Die Hard', which building is taken over by terrorists?",
        options: ["Empire State Building", "Burj Khalifa", "Nakatomi Plaza", "Eiffel Tower"],
        answer: "Nakatomi Plaza"
      },
      {
        question: "Who directed the movie 'The Dark Knight'?",
        options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"],
        answer: "Christopher Nolan"
      },
      {
        question: "Which actor portrayed the character Tony Stark in the Marvel Cinematic Universe?",
        options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
        answer: "Robert Downey Jr."
      },
      {
        question: "Which actress portrayed the character Wonder Woman in the DC Extended Universe films?",
        options: ["Gal Gadot", "Scarlett Johansson", "Jennifer Lawrence", "Brie Larson"],
        answer: "Gal Gadot"
      },
      {
        question: "In the movie 'Mission: Impossible - Fallout', who directed the high-octane action sequences and stunts?",
        options: ["Christopher McQuarrie", "J.J. Abrams", "Brad Bird", "James Wan"],
        answer: "Christopher McQuarrie"
      },
      {
        question: "Which actor played the character Wolverine in the X-Men film series?",
        options: ["Hugh Jackman", "Ryan Reynolds", "Chris Pratt", "Tom Hardy"],
        answer: "Hugh Jackman"
      },
      {
        question: "Who directed the action film 'Mad Max: Fury Road'?",
        options: ["George Miller", "Michael Bay", "Ridley Scott", "James Cameron"],
        answer: "George Miller"
      },
      {
        question: "Which actor portrayed the character Dominic Toretto in the 'Fast & Furious' film series?",
        options: ["Vin Diesel", "Dwayne Johnson", "Jason Statham", "Tyrese Gibson"],
        answer: "Vin Diesel"
      },
      {
        question: "In the movie 'The Matrix', which actor played the role of Neo, a computer hacker turned savior of humanity?",
        options: ["Keanu Reeves", "Brad Pitt", "Tom Cruise", "Leonardo DiCaprio"],
        answer: "Keanu Reeves"
      }
    ];
  } else if (gameType === "horror") {
    currentQuestionIndex = 0;
    questions = [
      {
        question: "In the movie 'The Exorcist', which young girl is possessed by a demonic entity?",
        options: ["Emily Rose", "Linda Blair", "Carrie White", "Samara Morgan"],
        answer: "Linda Blair"
      },
      {
        question: "Who directed the movie 'The Shining'?",
        options: ["Stanley Kubrick", "Alfred Hitchcock", "Wes Craven", "John Carpenter"],
        answer: "Stanley Kubrick"
      },
      {
        question: "What is the name of the supernatural entity that terrorizes the characters in the movie 'It'?",
        options: ["Pennywise", "Freddy Krueger", "Michael Myers", "Jason Voorhees"],
        answer: "Pennywise"
      },
      {
        question: "Which horror movie franchise features a doll named Chucky?",
        options: ["Child's Play", "Saw", "The Conjuring", "Insidious"],
        answer: "Child's Play"
      },
      {
        question: "Which actress portrayed the character Laurie Strode in the 'Halloween' film series?",
        options: ["Jamie Lee Curtis", "Neve Campbell", "Emma Roberts", "Taissa Farmiga"],
        answer: "Jamie Lee Curtis"
      },
      {
        question: "Who directed the horror film 'A Nightmare on Elm Street'?",
        options: ["Wes Craven", "John Carpenter", "Tobe Hooper", "Sam Raimi"],
        answer: "Wes Craven"
      },
      {
        question: "Which horror film follows a family terrorized by a group of masked strangers during a home invasion?",
        options: ["The Strangers", "Get Out", "The Babadook", "It Follows"],
        answer: "The Strangers"
      },
      {
        question: "In the movie 'The Conjuring', which real-life paranormal investigators are the central characters?",
        options: ["Ed and Lorraine Warren", "Jason and Samara Morgan", "Michael and Laurie Myers", "Freddy and Nancy Krueger"],
        answer: "Ed and Lorraine Warren"
      },
      {
        question: "Which actor portrayed the character Norman Bates in Alfred Hitchcock's film 'Psycho'?",
        options: ["Anthony Perkins", "Robert Englund", "Christopher Lee", "Jack Nicholson"],
        answer: "Anthony Perkins"
      },
      {
        question: "Who directed the supernatural horror film 'Hereditary'?",
        options: ["Ari Aster", "Jordan Peele", "Mike Flanagan", "Guillermo del Toro"],
        answer: "Ari Aster"
      }
    ];
  } else { // error handling
    alert("incorrect Game type submission");
    throw "incorrect Game type submission";
  }

  // Calls the shuffleArray function and passes the questions to it
  shuffleArray(questions);

  // Shuffle the order of options for each question
  questions.forEach((question) => shuffleArray(question.options));

  // Displays the question category submitted by the user
  displayQuestions(questions);
}

// Hiding the category buttons once one is selected
function hideCatagories() {
  document.getElementById("category-buttons").style.display = "none";
}

// Shows the current category that the user is playing
function showPlaying(gameType) {
  document.getElementById("current-category").style.display = "block";
  category = document.getElementById('current-category');
  category.textContent = gameType;
}

// Display the user a popup error message if they press next without selecting a question
function displayError() {
  document.getElementById("error").style.display = "flex";
  okButton = document.getElementById("errorOk");
  okButton.addEventListener("click", closeError);
}

// Closes the error popup on selection of the OK button
function closeError() {
  document.getElementById("error").style.display = "none";
}

// This shows the correct answer if the user gets it incorrect
function showCorrectAnswer(selectedOption) {
  let showCorrect = document.getElementById("show-correct");
  if (selectedOption.textContent === currentQuestion.answer) {
    showCorrect.textContent = "Correct!";
    document.getElementById("show-correct").style.color = "#4CAF50";
  } else {
    showCorrect.innerHTML = "The previous answer was incorrect. You should have chosen: <br />" + currentQuestion.answer;
    document.getElementById("show-correct").style.color = "#b63b2a";
  }
}

// Calling the welcome function
welcome();

