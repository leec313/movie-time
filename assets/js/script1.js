let currentQuestionIndex = 0;

// Function to display questions and options
function displayQuestions(questions) {
  const questionElement = document.getElementById("question-container");
  const optionsElement = document.getElementById("options-container");
  const nextButton = document.getElementById("submit-btn");



  // Show the current question and options
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      const optionElement = document.createElement("button");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionsElement.appendChild(optionElement);

      // Add event listener to each option
      optionElement.addEventListener("click", selectOption);

    });
    // On category submission, change button text to submit
    let submit = document.getElementById("submit-btn");
    submit.textContent = "Submit";
  }

  // Function to handle option selection
  function selectOption(event) {
    const selectedOption = event.target;
    const options = Array.from(optionsElement.getElementsByClassName("option"));

    options.forEach((option) => {

      option.classList.remove("selected");
    });

    selectedOption.classList.add("selected");
  }

  // Function to move to the next question
  function nextQuestion() {

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // Quiz ended
      questionElement.textContent = "Quiz ended!";
      optionsElement.innerHTML = "";
      let submit = document.getElementById("submit-btn");
      submit.textContent = "Well done!";
    }

  }

  // Attach event listener to the next button
  // for calling the next question
  //nextButton.addEventListener("click", nextQuestion);
  // for calling the checkAnswer function
  nextButton.addEventListener("click", handleButtonClick);

  // Show the first question
  showQuestion();
}

function runGame(gameType) {
  let questions;

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

function checkAnswer(questions) {
  console.log("checkAnswer function is running");

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  // Get all the buttons with the class "option"
  const buttons = document.querySelectorAll('.option');

  // Variable to store the selected option
  let selectedOption = '';

  // Function to handle the button click event
  function handleButtonClick(event) {
    // Get the text content of the clicked button
    const option = event.target.textContent;

    // Store the selected option in the variable
    selectedOption = option;
    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];
    // Check the selected option against the correct answer
    if (selectedOption === currentQuestion.answer) {
      console.log("Correct answer!");
      // Perform any desired actions for a correct answer
    } else {
      console.log("Wrong answer!");
      // Perform any desired actions for a wrong answer
    }
    // calling the nextAnswer function inside the handleButtonClick function
    nextQuestion();

  }

  // Attach click event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
}


const comedyButton = document.getElementById("comedy-btn");
const actionButton = document.getElementById("action-btn");
const horrorButton = document.getElementById("horror-btn");

comedyButton.addEventListener("click", () => runGame("comedy"));
actionButton.addEventListener("click", () => runGame("action"));
horrorButton.addEventListener("click", () => runGame("horror"));

