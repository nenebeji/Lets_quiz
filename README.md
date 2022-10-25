# LET'S QUIZ!
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Project Description](#project-description)

  - [Problems Solved](#problems-solved)

- [Screenshots](#screenshots)

- [Usage](#usage)

- [How to Contribute](#how-to-contribute)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)


## Project Description

This is a fun timed quiz application that stores high scores. It also has an extra penalty of 20s reduction when a question is answered incorrectly.

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

## Screenshots

![Webpage Image](/assets/images/LetsQuiz.gif)
> Let's Quiz!

## Usage

Click the link below to open the web page.

URL for application:

https://nenebeji.github.io/Lets_quiz/

## How to Contribute

1. Clone the repo using $ git clone git@github.com:nenebeji/Lets_quiz

2. Create a new branch $ git checkout -b your name 

3. Make Changes and test 

4. Submit a pull request with description for review

## Tests

Tests were run using console and browser page.

## Questions

Feel free to contact me for further questions via:

Github: https://github.com/nenebeji

Email: nenebeji@gmail.com

## License

The MIT License

  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

For more informaation you can click the link below:

https://opensource.org/licenses/MIT

Copyright (c) 2022 Oritsegidenene Beji.







