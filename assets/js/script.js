var quizcontainer = document.getElementById("container");
var endcontainer = document.getElementById("end-container")
var submitbtn = document.getElementById("submit");
var timeEl = document.querySelector("#timer");
var finalscoretxt = document.querySelector("#final-score");
var message = document.querySelector("#message");
var h3 = document.querySelector("h3");

var question = document.getElementById("question");
var options = Array.from(document.getElementsByClassName("option-text"));
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var optionEL = document.querySelector("#optionEl");
console.log(options);

var currentQ = {};
var acceptedAns = true;
var questioncount = 0;

//var MaxQs = 4;

//var availableQs = [];

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
          localStorage.setItem("score", secondsLeft);
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
    questioncount = 0;
    //availableQs = [...questions];
    setTimer();
    getnewQ();
}


function getnewQ() {
    //questioncount++;
    // var QuestionI = Math.floor(Math.random() * availableQs.length)
    currentQ = questions[questioncount];
    question.innerText = currentQ.question;
    opt1.innerText = currentQ[1];
    opt2.innerText = currentQ[2];
    opt3.innerText = currentQ[3];
    opt4.innerText = currentQ[4];

    acceptedAns = true;
    
  options.forEach(option => {
    option.addEventListener("click", e => {
        if(!acceptedAns) return;

        acceptedAns = false;
        var selectedoption = e.target;
        var selectedAnswer = selectedoption.dataset["number"];

        console.log(selectedAnswer == currentQ.answer);

        if(selectedAnswer == currentQ.answer) {
            h3.style.display = "block"
            message.textContent = "Correct!";
        }
        else {
            h3.style.display = "block"
            message.textContent = "Incorrect!";
            secondsLeft = secondsLeft - 20;
        }
    })
})
}


startQuiz();
getnewQ();
// eventlistener for each click to switch to a question
optionEL.addEventListener("click", function() {
    
    questioncount++

    if(questioncount  < questions.length) {
    getnewQ();
    }
    else {
        stopTimer();
        quizcontainer.style.display = "none";
        endcontainer.style.display = "block";
        finalscoretxt.textContent = secondsLeft;
        localStorage.setItem("score", secondsLeft);
    }  
   
}
)





// for submit Initials at end of page
var initials = document.getElementById("initials");
var submitbtn = document.getElementById("submit");
var recentscore = localStorage.getItem("score")

var HighScores = JSON.parse(localStorage.getItem("HighScores")) || [];
console.log(HighScores);

initials.addEventListener("keyup", function(){
    
    submitbtn.disabled = !initials.value;
})

submitbtn.addEventListener("click", submit);

function submit(event) {
    event.preventDefault();

    var score = {
        score: recentscore,
        name: initials.value,
    };
    HighScores.push(score);

    // sort the highscores 
    HighScores.sort(function(a,b) {
        return b.score - a.score;
    })
    //cut of everything after 6 scores.
    HighScores.splice(6);

    localStorage.setItem("HighScores", JSON.stringify(HighScores));
    window.location.assign("./highscore.html");
}





