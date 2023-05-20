// Function to display questions and options
function displayQuestions(questions) {
  const questionElement = document.getElementById("question-container");
  const optionsElement = document.getElementById("options-container");
  const nextButton = document.getElementById("submit-btn");

  let currentQuestionIndex = 0;

  // Show the current question and options
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
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
    const options = Array.from(optionsElement.getElementsByClassName("options-container"));

    options.forEach((option) => {
      option.classList.remove("selected");
    });

    selectedOption.classList.add("selected");
    checkAnswer();
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
  nextButton.addEventListener("click", nextQuestion);

  // Show the first question
  showQuestion();
}

function runGame(gameType) {
  let questions;

  if (gameType === "comedy") {
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

function checkAnswer(questions, currentQuestionIndex) {
  const selectedOption = document.getElementsByClassName('option selected');
  if (selectedOption) {
    const userAnswer = selectedOption.value;
    if (userAnswer === questions[currentQuestionIndex].answer) {
      scoreContainer.textContent = ++score;
    }
    selectedOption.checked = false;
    currentQuestionIndex++;
    displayQuestions(questions, currentQuestionIndex);
  }
}

const comedyButton = document.getElementById("comedy-btn");
const actionButton = document.getElementById("action-btn");
const horrorButton = document.getElementById("horror-btn");

comedyButton.addEventListener("click", () => runGame("comedy"));
actionButton.addEventListener("click", () => runGame("action"));
horrorButton.addEventListener("click", () => runGame("horror"));