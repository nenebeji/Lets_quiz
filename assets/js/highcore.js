var HighScoresL = document.getElementById("HighScoresL");
var clearHS = document.getElementById("clear-HS");
var HighScores = JSON.parse(localStorage.getItem("HighScores")) || [];
// sends a list items to html
HighScoresL.innerHTML = HighScores.map(score => {
    return `<li class = "High-Score">${score.name} - ${score.score}</li>`;
})
.join("");

// removes from local storage 
function removeHS() {
    localStorage.removeItem("HighScores");
    HighScoresL.innerHTML = "";
}

// Clears high scores

clearHS.addEventListener("click", removeHS);