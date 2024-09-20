let homeScore = 0;
let awayScore = 0;

function updateScore(team, increment) {
    if (team === 'home') {
        homeScore += increment;
        document.getElementById("home-score").textContent = homeScore;
    } else if (team === 'away') {
        awayScore += increment;
        document.getElementById("away-score").textContent = awayScore;
    }
}

document.getElementById("home-btn-1").addEventListener("click", () => updateScore('home', 1));
document.getElementById("home-btn-2").addEventListener("click", () => updateScore('home', 2));
document.getElementById("home-btn-3").addEventListener("click", () => updateScore('home', 3));
document.getElementById("away-btn-1").addEventListener("click", () => updateScore('away', 1));
document.getElementById("away-btn-2").addEventListener("click", () => updateScore('away', 2));
document.getElementById("away-btn-3").addEventListener("click", () => updateScore('away', 3));

function resetScore() {
    homeScore = 0;
    awayScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("away-score").textContent = awayScore;
}

document.getElementById("reset-btn").addEventListener("click", resetScore);

function saveScores() {
    localStorage.setItem('homeScore', homeScore);
    localStorage.setItem('awayScore', awayScore);
}

function loadScores() {
    homeScore = parseInt(localStorage.getItem('homeScore')) || 0;
    awayScore = parseInt(localStorage.getItem('awayScore')) || 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("away-score").textContent = awayScore;
}

window.onload = loadScores;