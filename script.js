var timeEl = document.querySelector("#time");
var start = document.querySelector("#start");
var secondsLeft = 90;
// var timerInterval = setInterval(countDown, 1000);
var timerInterval;
var questionIndex = 0;
var questionEl = document.querySelector("#questions");
var questionAnswers = document.querySelector("#answer");
var questionTitle = document.querySelector("#title");
var questionChoices = document.querySelector("#choices");
var questionButton = document.querySelector("#questionButton");
var userChoice = document.querySelector("#userChoice");
var finalScore = secondsLeft;
var endGame = document.querySelector("#quiz-end")


const quizQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

function countDown(){
    secondsLeft-- 
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
        endQuiz();
    }
}

function startQuiz() {
    var welcomePage = document.querySelector("#welcome");
    welcomePage.setAttribute("class", "invisible");
    start.setAttribute("class", "invisible")
    questionEl.setAttribute("class", "visible quiz-container");
    timerInterval = setInterval(countDown, 1000);
    showQuestion();
}

function showQuestion(){
    var currentQuestion = quizQuestions[questionIndex];
    questionTitle.textContent = currentQuestion.title;
    
    for(i = 0; i < currentQuestion.choices.length; i++) {
      var radioBox = document.getElementById(i);
      var radioBoxLabel = document.querySelector(`label[for="${i}"]`)
      console.log(radioBoxLabel)
      radioBox.value = currentQuestion.choices[i];
      radioBoxLabel.textContent = currentQuestion.choices[i];
    } }
  
function nextQuestion(event) {
  event.preventDefault();
  checkAnswer();
  questionIndex++
  if (questionIndex === quizQuestions.length){
    return endQuiz();
  }
  showQuestion() 
}

function saveScore() {
    localStorage.setItem("finalScore")

}
function endQuiz() {
    clearInterval(timerInterval);
    var currentScores = JSON.parse(localStorage.getItem("scores")) || []
    var userName = prompt("Please enter your name");
    var userData = {
      userName: userName, userScore: secondsLeft
    }
    currentScores.push(userData)
    localStorage.setItem("scores", JSON.stringify(currentScores))

    
    alert("You Scored " + secondsLeft)
    // if(!currentScores) {currentScores =[]}
  }


  function checkAnswer(){
  var radioBoxes = document.querySelectorAll("input[type=radio]")
  var correctAnswer = quizQuestions[questionIndex].answer
  for(var i = 0; i< radioBoxes.length; i++) {
    var currentButton = radioBoxes[i];
    if (currentButton.checked) {
     if (currentButton.value === correctAnswer) {
       alert("Correct!")
       secondsLeft+=5

     } else {
       alert("Incorrect!")
     }
    }
  }
  }
  // endGame.addEventListener("click", saveScore);

  start.addEventListener("click", startQuiz);
  questionButton.addEventListener("click", nextQuestion);

  