// Setting the index to 0 so that the below variable matches up with the question index
let currentQuestionIndex = 0;
//Setting score to 0 to start the game
let score = 0;
let incorrect = 0;

function welcome() {
  //Hiding the score div if it's 0
  document.getElementById("score-container").style.visibility = "hidden";
  document.getElementById("incorrect-container").style.visibility = "hidden";
  // Hiding the current category and submit button until the function is called
  document.getElementById("current-category").style.visibility = "hidden";
  document.getElementById("submit-btn").style.visibility = "hidden";

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
  document.getElementById("submit-btn").style.visibility = "visible";
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
    document.getElementById("score-container").style.visibility = "hidden";
  } else {
    document.getElementById("score-container").style.visibility = "visible";
  }

  //hiding the incorrects if 0 and displaying it if more than 0
  if (incorrect <= 0) {
    document.getElementById("incorrect-container").style.visibility = "hidden";
  } else {
    document.getElementById("incorrect-container").style.visibility = "visible";
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
    document.getElementById("restart").style.visibility = "hidden";
  }
}

// Checks the user's selected option with the correct option by accessing the dictionaries in the array below
function checkAnswer(questions, questionElement, optionsElement, nextButton) {
  currentQuestion = questions[currentQuestionIndex];
  let selectedOption = document.querySelector(".selected");

  // if correct, adds to score | if incorrect, adds to incorrect | otherwise, produces alert to user
  if (selectedOption && selectedOption.textContent === currentQuestion.answer) {
    console.log("Correct answer!");
    score++;
    let scoreElement = document.getElementById("score-container");
    scoreElement.textContent = "Score: " + score;
    console.log(score)
    // Moves onto the next question once check is complete
    nextQuestion(questions, questionElement, optionsElement, nextButton);
  } else if (selectedOption && selectedOption.textContent != currentQuestion.answer) {
    console.log("Wrong answer!");
    incorrect++;
    let scoreElement = document.getElementById("incorrect-container");
    scoreElement.textContent = "Incorrect: " + incorrect;
    // Moves onto the next question once check is complete
    nextQuestion(questions, questionElement, optionsElement, nextButton);
  } else if (currentQuestionIndex < questions.length) { // error handling - if no option was selected, user gets feedback and game remains on same question
    alert("Please select an option or restart the game");
    throw "No option selected";
  }
}


// Restarts game
function restartGame() {
  // Reload the current document to restart the game
  location.reload();
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
      }

    ];
  } else { // error handling
    alert("incorrect Game type submission");
  }
  // Displays the question category submitted by the user
  displayQuestions(questions);
}

function hideCatagories() {
  // Hiding the category buttons once one is selected
  document.getElementById("category-buttons").style.visibility = "hidden";
}

function showPlaying(gameType) {
  document.getElementById("current-category").style.visibility = "visible";
  // Shows the current category that the user is playing
  category = document.getElementById('current-category');

  category.textContent = gameType;
}

// Calling the welcome function
welcome();

