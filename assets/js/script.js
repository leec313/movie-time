// Setting the index to 0 so that the below variable matches up with the question index
let currentQuestionIndex = 0;
//Setting score to 0 to start the game
let score = 0;
//Hiding the score div if it's 0
document.getElementById("score-container").style.visibility = "hidden";
// Hiding the current category until the function is called
document.getElementById("current-category").style.visibility = "hidden";


// Function used to display the questions
function displayQuestions(questions) {
  // Getting the elements from the index.html in order to create the buttons
  let questionElement = document.getElementById("question-container");
  let optionsElement = document.getElementById("options-container");
  let nextButton = document.getElementById("submit-btn");

  // Function to show each question and push the html buttons/display to the index.html
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      let optionElement = document.createElement("button");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionsElement.appendChild(optionElement);

      optionElement.addEventListener("click", selectOption);
    });

    nextButton.textContent = "Submit";

    //hiding the score if 0 and displaying it if more than 0
    if (score <= 0) {
      document.getElementById("score-container").style.visibility = "hidden";
    } else {
      document.getElementById("score-container").style.visibility = "visible";
    }
  }

  // Function used to track which option is being selected by the user
  function selectOption(event) {
    let selectedOption = event.target;
    let options = Array.from(optionsElement.getElementsByClassName("option"));

    // Adds "selected" to the class for the option that is selected
    options.forEach((option) => {
      option.classList.remove("selected");
    });

    // Removes the selected class when moving onto the next question
    selectedOption.classList.add("selected");
  }

  // Checks the user's selected option with the correct option by accessing the dictionaries in the array below
  function checkAnswer() {
    let currentQuestion = questions[currentQuestionIndex];
    let selectedOption = document.querySelector(".selected");

    if (selectedOption && selectedOption.textContent === currentQuestion.answer) {
      console.log("Correct answer!");
      score++;
      let scoreElement = document.getElementById("score-container");
      scoreElement.textContent = "Score: " + score;
      console.log(score)
    } else {
      console.log("Wrong answer!");
      // Perform any desired actions for a wrong answer
    }

    // Moves onto the next question once check is complete
    nextQuestion();
  }

  // Function for the next question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      questionElement.textContent = "Quiz ended!";
      optionsElement.innerHTML = "";
      nextButton.textContent = "Play Again";
      // removing both event listeners so that the button does not run the unnecessary functions
      nextButton.removeEventListener("click", nextQuestion);
      nextButton.removeEventListener("click", checkAnswer);
      // Add event listener for restarting the game
      nextButton.addEventListener("click", restartGame);
    }
  }

  nextButton.removeEventListener("click", nextQuestion);
  nextButton.addEventListener("click", checkAnswer);

  showQuestion();
}

// Restarts game
function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
  nextButton.removeEventListener("click", restartGame); // Remove the event listener for restarting the game
  nextButton.addEventListener("click", checkAnswer); // Add event listener for checking the answer
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
  }

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


let comedyButton = document.getElementById("comedy-btn");
let actionButton = document.getElementById("action-btn");
let horrorButton = document.getElementById("horror-btn");

comedyButton.addEventListener("click", () => runGame("comedy"));
actionButton.addEventListener("click", () => runGame("action"));
horrorButton.addEventListener("click", () => runGame("horror"));

