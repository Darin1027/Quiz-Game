//* DECLARATION OF VARIABLE IN GLOBAL MEMORY
var headerElement = document.querySelector(".header");
var wrapperElement = document.querySelector(".wrapper");
var containerElement = document.querySelector(".container");
var containerContElement = document.querySelector(".container-contents");
var question1Element = document.querySelector("#question1");
var question2Element = document.querySelector("#question2");
var question3Element = document.querySelector("#question3");
var question4Element = document.querySelector("#question4");
var timer = document.querySelector("#timer");
var startBtnElement = document.querySelector("#start-btn");
var startGameElement = document.querySelector("#start-game");
var questionElement = document.querySelector("#question");
var questionTextElement = document.querySelector("#question-text");
var timerId;
var timeLeft = 120;
var questionIndex = 0;
var currentQuestion;
var questionArray = [
  {
    question: "Who is her favorite person?",
    choices: ["Genghis Khan", "Vladimir Putin", "Thanos", "Mama"],
    correctAnswer: "Brown",
  },
  {
    question: "What is her favorite food?",
    choices: [
      "Organic Cotton Candy",
      "Whiskey on the Rocks",
      "Apples",
      "Raw Sugar Cane",
    ],
    correctAnswer: "Apples",
  },
  {
    question: "What is her favorite show?",
    choices: ["The Ozarks", "Game of Thrones", "Rick and Morty", "CocoMelon"],
    correctAnswer: "CocoMelon",
  },
  {
    question: "What did she dress as for Halloween? ",
    choices: [
      "Tom Brady in full game uniform",
      "A bottle of Kethup",
      "A bottle of Mustard",
      "The Cat in the Hat",
    ],
    correctAnswer: "The Cat in the Hat",
  },
];

// * EVENT LISTENERS
startBtnElement.addEventListener("click", startGame);
questionElement.addEventListener("click", answerClick);

//* FUNCTIONS
function startGame() {
  startGameElement.setAttribute("class", "hide");
  questionElement.removeAttribute("class");
  timerId = setInterval(timerTick, 1000);
  timer.textContent = timeLeft;
  getNextQuestion();
}

function getNextQuestion() {
  currentQuestion = questionArray[questionIndex];
  questionTextElement.textContent = currentQuestion.question;
  question1Element.textContent = currentQuestion.choices[0];
  question2Element.textContent = currentQuestion.choices[1];
  question3Element.textContent = currentQuestion.choices[2];
  question4Element.textContent = currentQuestion.choices[3];
}

function answerClick(event) {
  var choiceElement = event.target;
  if (choiceElement.textContent === currentQuestion.correctAnswer) {
  }
  // TBD
}

function timerTick() {
  console.log("timerTick called");
  timeLeft--;
  timer.textContent = timeLeft;
  if (timeLeft <= 0) {
    gameOver();
  }
}
function gameOver() {
  // to be completed
}
