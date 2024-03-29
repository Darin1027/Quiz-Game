// Initialize variables
let timerInterval;
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let highScores = [];

// Quiz questions and answers
const questions = [
  {
    question: "What is the real name of the X-Men member known as Cyclops?",
    answers: ["Scott Summers", "Bobby Drake", "Ororo Munroe", "Hank McCoy"],
    correctAnswer: "Scott Summers",
  },
  {
    question: "Who is the leader of the X-Men?",
    answers: ["Professor X", "Cyclops", "Storm", "Wolverine"],
    correctAnswer: "Professor X",
  },
  {
    question: "What is the name of the X-Men member who can control metal?",
    answers: ["Magneto", "Storm", "Rogue", "Shadowcat"],
    correctAnswer: "Magneto",
  },
  {
    question:
      "What is the name of the X-Men member who can fly and shoot energy beams from his eyes?",
    answers: ["Cyclops", "Beast", "Angel", "Iceman"],
    correctAnswer: "Cyclops",
  },
  {
    question: "Who is the X-Men member who has the ability to teleport?",
    answers: ["Nightcrawler", "Jean Grey", "Archangel", "Psylocke"],
    correctAnswer: "Nightcrawler",
  },
  {
    question:
      "What is the name of the X-Men member who has the ability to create force fields?",
    answers: ["Colossus", "Rogue", "Havok", "Polaris"],
    correctAnswer: "Colossus",
  },
  {
    question:
      "What is the name of the X-Men member who has the ability to control the weather?",
    answers: ["Storm", "Iceman", "Archangel", "Beast"],
    correctAnswer: "Storm",
  },
  {
    question:
      "Who is the X-Men member who has the ability to manipulate reality?",
    answers: ["Scarlet Witch", "Jean Grey", "Emma Frost", "Forge"],
    correctAnswer: "Scarlet Witch",
  },
  {
    question:
      "What is the name of the X-Men member who has the ability to change into a werewolf?",
    answers: ["Wolfsbane", "Nightcrawler", "Sabretooth", "Wolverine"],
    correctAnswer: "Wolfsbane",
  },
  {
    question: "What is the name of the X-Men's main base of operations?",
    answers: [
      "The X-Mansion",
      "The Danger Room",
      "The Blackbird",
      "The Xavier Institute",
    ],
    correctAnswer: "The X-Mansion",
  },
];

function startGame() {
  document.getElementById("start-game-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  startQuiz();
}

// Start the quiz
function startQuiz() {
  // Initialize variables
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;

  // Start the timer
  let timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time-left").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz(); // call the function when the time is up
    }
  }, 1000);

  // Display the first question
  displayQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Display the current question
function displayQuestion() {
  let question = questions[currentQuestion];
  shuffleArray(question.answers);
  document.getElementById("question").innerHTML = question.question;
  for (let i = 0; i < question.answers.length; i++) {
    let answerBtn = document.getElementById(`answer${i}`);
    answerBtn.innerHTML = question.answers[i];
    answerBtn.onclick = checkAnswer;
  }
}

// Check if the selected answer is correct
function checkAnswer() {
  let correctAnswer = questions[currentQuestion].correctAnswer;
  if (this.textContent === correctAnswer) {
    score++;
    document.getElementById("score").textContent = score;
  } else {
    timeLeft -= 10;
  }
  // Move to the next question
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    displayQuestion(); // call the function to display the next question
  }
}

// End the quiz
function endQuiz() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("final-score").textContent = score;
  clearInterval(timerInterval);

  // Save the score and initials
  let initials = document.getElementById("initials").value;
  if (initials !== "") {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials: initials, score: score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
  } else {
    alert("Please enter your initials to save your score.");
  }

  // Display the final score and high scores
  document.getElementById("final-score-container").style.display = "block";
  displayHighScores();
}

// Display the list of past quiz sessions
function displayHighScores() {
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  let highScoreList = document.getElementById("highscores-list");
  highScoreList.innerHTML = "";
  for (let i = 0; i < highScores.length; i++) {
    let score = highScores[i];
    let li = document.createElement("li");
    li.textContent = `${score.initials} - ${score.score}`;
    highScoreList.appendChild(li);
  }
}

startQuiz();
