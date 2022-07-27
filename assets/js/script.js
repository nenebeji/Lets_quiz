var quizcontainer = document.getElementById("container");
var endcontainer = document.getElementById("end-container")
var submitbtn = document.getElementById("submit");
var timeEl = document.querySelector("#timer");
var finalscoretxt = document.querySelector("#final-score");

var question = document.getElementById("question");
var options = document.getElementsByClassName("option-text");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var optionEL = document.querySelector("#optionEl");
console.log(options);


var acceptedAns = true;
var questioncount = 0;

var availableQs = [];

var questions = [
    {
        question: "Commonly used data types are _________.",
        1: "strings, numbers and HTML",
        2: "strings, numbers and booleans",
        3: "numbers and cascading",
        4: "python",
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        1: "boleans",
        2: "numbers",
        3: "strings",
        4: "all of the above",
        answer: 4
    },
    {
        question: "The condition in an if / else statement is enclosed with ___________.",
        1: "parenthesis",
        2: "quotes",
        3: "curly brackets",
        4: "square brackets",
        answer: 3
    },
    {
        question: "A useful tool used during development and debugging for printing content to the debugger is: ",
        1: "console.log",
        2: "terminal/bash",
        3: "queryselector",
        4: "for loops",
        answer: 1
    },
];



// timer functions and variables
var secondsLeft = 100;
var timerInterval = null;

timeout = setTimeout(setTimer, 1000);

function setTimer() {
    if(timerInterval) {
        return;
    }

    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft 
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          resetTimer();
          quizcontainer.style.display = "none";
          endcontainer.style.display = "block";
          finalscoretxt.textContent = secondsLeft;
        }
      }, 1000);

}

function stopTimer() {
    clearInterval(timerInterval)
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    secondsLeft = 0
    timeEl.textContent = secondsLeft;
}


// to start Quiz
function startQuiz() {
    setTimer();
    getnewQ();
}

function getnewQ() {

    var currentQ = questions[questioncount];
    question.innerText = currentQ.question;
    opt1.innerText = currentQ[1];
    opt2.innerText = currentQ[2];
    opt3.innerText = currentQ[3];
    opt4.innerText = currentQ[4];
}


startQuiz();
getnewQ();
// eventlistener for each click to switch to a question
optionEL.addEventListener("click", function(event) {
    // prevents bubbling when clicking on buttons
    event.stopPropagation();
    questioncount++

    if(questioncount  < questions.length) {
    getnewQ();
    }
    else {
        stopTimer();
        quizcontainer.style.display = "none";
        endcontainer.style.display = "block";
        finalscoretxt.textContent = secondsLeft;
    }
    
})


// variable for each button according to data attribute converted to number to match the answer in each string

console.log(opt2.dataset["number"]);

var opt1btn = + opt1.dataset["number"];
var opt2btn = + opt2.dataset["number"];
var opt3btn = + opt3.dataset["number"];
var opt4btn = + opt4.dataset["number"];
// get the answer in each string
var correct = questions[questioncount].answer;

console.log(opt2btn === correct)
