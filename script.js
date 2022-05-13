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
    answer: 2
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: 2
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: 3
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: 2
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: 3
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
      var listItem = document.getElementById(i);
      listItem.textContent = currentQuestion.choices[i];
    } }
  
function nextQuestion(event) {
  event.preventDefault();
  questionIndex++
  showQuestion() 
}

function saveScore() {
    localStorage.setItem("finalScore")

}
function endQuiz() {
    clearInterval(timerInterval);
  }
// function checkAnswer(){
//   if (userChoice === quizQuestions[questionIndex].answer) {
//     alert("Correct");
//   } else if(userChoice2 === quizQuestions[questionIndex].answer){
    
//     secondsLeft -= 3;
//     alert("Try Again!");
//   }
// }

  // endGame.addEventListener("click", saveScore);

  start.addEventListener("click", startQuiz);
  questionButton.addEventListener("click", nextQuestion);

  