# LET'S QUIZ!

![Let's Quiz](https://user-images.githubusercontent.com/105363883/181396347-ebceae9a-4e61-4d3a-b56a-7ea66e601cf8.gif)

> Quiz Time!

## Table of Contents

* Description

* * Problems Solved

* References


## Description
The aim of this project was to build a timed quiz that stores high scores. It also has an extra penalty of 20s reduction when a question is answered incorrectly.

### Problems Solved

* I Created three html files:
* * Index.html: to store the first page with instructions and start quiz button.
* * main.html: the main file that contained the quiz and end page for initials.
* * Highscore.html: the final page that shows the highscores and intials stored in the local storage (maximum of 6 scores).

* I then created css files to link to each html file:
* * intro.css: has the base styles for all the pages, linked to index and main html
* * style.css: linked to just the main.html.
* * highscore.css: linked to just the highscore.html file.

* Also creasted two Js files:
* * script.js: linked main.html file.
* * highscore.js: linked to highscore.html file.

* Created variables in the script.js file for the possible questions in the quiz, answers and buttons.

*  Created functions to execute the timer and the next question

*  The most challenging part was getting the programme to read when the answer selected for each question was incorrect, had to do research on different ways to execute this. The forEach statement seemed to work after several tries.

* Stored the seconds left in the localstorage as the score.

* Then stored the high scores as a string and then an object using the JSON.stringify and JSON.parse.

* Finally made the high score values appear at the high score page.

## References

URL for application:

https://nenebeji.github.io/Lets_quiz/





<<<<<<< HEAD
=======


>>>>>>> 8286b028f71cf606e4b405103b2f190bd47ee753
