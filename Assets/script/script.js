//* DECLARATION OF VARIABLE IN GLOBAL MEMORY

// var timerId;
// var timeLeft = 120;
// var currentQuestion;

// // * EVENT LISTENERS
// questionElement.addEventListener("click", () => {
//   questionIndex++;
//   getNextQuestion();
// });

// //* FUNCTIONS
// //on screen load the user should see a start button
// function startGame() {
//   startGameElement.setAttribute("class", "hide"); //hide the start button
//   questionElement.removeAttribute("class"); //show the hidden question
// timerId = setInterval(timerTick, 1000); //sets the clock timer countdown
// timer.textContent = timeLeft; //displays the time remaining to the user
//   getNextQuestion(); //get the first question by calling the getNextQuestion function
// }

// function getNextQuestion() {
//   currentQuestion = questionArray[questionIndex]; //establishes the current question is set at
//   //   whatever our current question index is (start should be 0),
//   questionTextElement.textContent = currentQuestion.question; //updates element text to the current question index
//   question1Element.textContent = currentQuestion.choices[0]; // update text for user choice
//   question2Element.textContent = currentQuestion.choices[1]; // update text for user choice
//   question3Element.textContent = currentQuestion.choices[2]; // update text for user choice
//   question4Element.textContent = currentQuestion.choices[3]; // update text for user choice
// }

// function selectedAnswer(event) {
//   var selectedElement = event.target;
//   if (selectedElement.textContent === currentQuestion.correctAnswer) {
//   } else ()
//   questionIndex = questionIndex++;
//   return questionIndex;
//   }
// }

// function timerTick() {
//   console.log("timerTick called");
//   timeLeft--;
//   timer.textContent = timeLeft;
//   if (timeLeft <= 0) {
//     gameOver();
//   }
// }
// function gameOver() {
//   // to be completed
// }

var HighscoreLink = document.querySelector("#HighscoreLink");
var timer = document.querySelector("#timer");
var startGame = document.querySelector("#start-game");
var startBtn = document.querySelector("#start-btn");
var questionContainer = document.querySelector("#question-container");
var questionText = document.querySelector("#question-text");
var answerBtns = document.querySelector("#answer-buttons");
var highscore = document.querySelector("#highscore");
var questionArray = [
  {
    question: "Who is her favorite person?",
    choices: ["Genghis Khan", "Vladimir Putin", "Thanos", "Mama"],
    answer: "Mama",
  },
  {
    question: "What is her favorite food?",
    choices: [
      "Organic Cotton Candy",
      "Whiskey on the Rocks",
      "Apples",
      "Raw Sugar Cane",
    ],
    answer: "Apples",
  },
  {
    question: "What is her favorite show?",
    choices: ["The Ozarks", "Game of Thrones", "Rick and Morty", "CocoMelon"],
    answer: "CocoMelon",
  },
  {
    question: "What did she dress as for Halloween? ",
    choices: [
      "Tom Brady in full game uniform",
      "A bottle of Kethup",
      "A bottle of Mustard",
      "The Cat in the Hat",
    ],
    answer: "The Cat in the Hat",
  },
];
console.log(questionArray[0].answer);

startBtn.addEventListener("click", function () {
  console.log("started");
  startGame.setAttribute("class", "hide");
  questionContainer.removeAttribute("class", "hide");
});

function answerClick() {
  //psuedio code
  //. if - check user guessed wrong
  //when wrong a timer deduction needs to happen
  //else - check if user guessed right
  console.log(this); //this will refer to the value of the button the user
  //clicked and you can compare thatr value to this
}

var questionIndex = 0;
function getNextQuestion() {
  //get current question object from array
  var currentQuestion = questionArray[questionIndex];

  //update the title

  //clear old question choices

  //loop over choices array with the for/each method
  // currentQuestion.choices.forEach(){
  //   console.log(test);
  // }
}

// startBtn.addEventListener("click", () => {
//   console.log("started");
// });
console.log("test");

function startGame() {
  console.log("started");
  // startBtn.setAttribute("class", "hide");
}

// function start(a1, a2) {
//   var x = a1 + a2;
//   return x;
// }

// var y = 5;
// var z = 3;
// var result = start(z, y);
// console.log("result", result);

// startBtn.setAttribute("class", "hide");}

// currentQuestion.choices.forEach(function(choice, i) {
//   // create new button for each choice
//   var choiceNode = document.createElement("button");
//   choiceNode.setAttribute("class", "choice");
//   choiceNode.setAttribute("value", choice);

//   choiceNode.textContent = i + 1 + ". " + choice;

//   // attach click event listener to each choice
//   choiceNode.onclick = answerClick;

//   // display on the page
//   choicesEl.appendChild(choiceNode);
// });
