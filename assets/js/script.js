var quiz = document.getElementById("quiz");
// make answers an array
var answer = document.querySelector("#answer");
var questions = document.querySelector("#question");
var ansOne = document.getElementById("1");
var ansTwo = document.getElementById("2");
var ansThree = document.getElementById("3");
var ansFour = document.getElementById("4");
var end = document.getElementById("end-container")
var submitbtn = document.getElementById("submit");
var startquizBtn = document.querySelector("#StartQuiz");
var quizintro = document.getElementById("quiz-intro");
var finalscoretxt = document.querySelector("#final-score");

var quizdetails = [
    {
        question: "Commonly used data types are _________.",
        1: "1. strings, numbers and HTML",
        2: "2. strings, numbers and booleans",
        3: "3. numbers and cascading",
        4: "4. python",
        correct: "2",
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        1: "1. boleans",
        2: "2. numbers",
        3: "3. strings",
        4: "4. all of the above",
        correct: "4",
    },
    {
        question: "The condition in an if / else statement is enclosed with ___________.",
        1: "1. parenthesis",
        2: "2. quotes",
        3: "3. curly brackets",
        4: "4. square brackets",
        correct: "3",
    },
    {
        question: "A useful tool used during development and debugging for printing content to the debugger is: ",
        1: "1. console.log",
        2: "2. terminal/bash",
        3: "3. queryselector",
        4: "4. for loops",
        correct: "1",
    },
];

console.log(quizdetails);

var score = 0;
var currentquiz = 0;
var acceptedanswers = true;

var timeEl = document.querySelector("#timer");

var secondsLeft = 100;

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft 
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval)
        }
      }, 1000);
}


console.log(startquizBtn)
console.log(quizintro)

// adds event listener to start Quiz button
startquizBtn.addEventListener("click", function(){
    setTimer();
    quizintro.style.display = "none";
    quiz.style.display = "block";
    
}
);

// selects message 
var message = document.querySelector(".message");

var h3 = document.querySelector("h3")

    // set innerText fot html
    function nextQ() {
    var currentquizdetails = quizdetails[currentquiz];
    questions.innerText = currentquizdetails.question;
    ansOne.innerText = currentquizdetails[1];
    ansTwo.innerText = currentquizdetails[2];
    ansThree.innerText = currentquizdetails[3];
    ansFour.innerText = currentquizdetails[4];
    }

    console.log(answer)

   // executes nextQ function for Quiz questions
    nextQ();

    // add event listener for questions
    answer.addEventListener("click", function(){
        currentquiz++
        if (currentquiz < quizdetails.length){
        nextQ();
        }
        else {
            quiz.style.display = "none";
            end.style.display = "block";
        }
    })

    console.log (quizdetails[currentquiz].correct)

   // function penalty(){
      //  if(answer === quizdetails[currentquiz].correct) {
        //    message.textContent = "Correct!";
          //  h3.style.display = "block"
          //  }
          //  else {
           //     message.textContent = "Wrong!";
           //     h3.style.display = "block"
           //         secondsLeft = secondsLeft - 10;
           // }
       // }
