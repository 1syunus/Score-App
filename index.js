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

let guestScoreBtnOne = document.getElementById("guest-btn-1")
let guestScoreEl =document.getElementById("guest-score")
let guestScore = 0

function guestPlusOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestPlusTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestPlusThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}