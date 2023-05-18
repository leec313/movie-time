const comedyMovies = [
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

const actionMovies = [
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

const horrorMovies = [
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

const categoryButtons = document.getElementById('category-buttons');
const comedyButton = document.getElementById('comedy-btn');
const actionButton = document.getElementById('action-btn');
const horrorButton = document.getElementById('horror-btn');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

let currentCategory = [];
let currentQuestionIndex = 0;
let score = 0;

comedyButton.addEventListener('click', () => {
  startQuiz(comedyMovies);
});

actionButton.addEventListener('click', () => {
  startQuiz(actionMovies);
});

horrorButton.addEventListener('click', () => {
  startQuiz(horrorMovies);
});

submitButton.addEventListener('click', checkAnswer);

