let homeScoreBtnOne = document.getElementById("home-btn-1")
let homeScoreEl =document.getElementById("home-score")
let homeScore = 0

function homePlusOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homePlusTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homePlusThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let awayScoreBtnOne = document.getElementById("away-btn-1")
let awayScoreEl =document.getElementById("away-score")
let awayScore = 0

function awayPlusOne(){
    awayScore += 1
    awayScoreEl.textContent = guestScore
}

function awayPlusTwo(){
    awayScore += 2
    awayScoreEl.textContent = guestScore
}

function guestPlusThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}