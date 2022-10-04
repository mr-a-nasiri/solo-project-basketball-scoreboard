let homeScoreValue = document.getElementById("home-score-value");
let awayScoreValue = document.getElementById("away-score-value");
let homeFoulsValue = document.getElementById("home-fouls-value");
let awayFoulsValue = document.getElementById("away-fouls-value");
let homeScoreCount = 0;
let awayScoreCount = 0;
let homeFoulsCount = 0;
let awayFoulsCount = 0;

// Home Points Counter
function plusOneHome() {
  homeScoreCount += 1;
  homeScoreValue.textContent = homeScoreCount;
}
function plusTwoHome() {
  homeScoreCount += 2;
  homeScoreValue.textContent = homeScoreCount;
}
function plusThreeHome() {
  homeScoreCount += 3;
  homeScoreValue.textContent = homeScoreCount;
}
// Away Points Counter
function plusOneAway() {
  awayScoreCount += 1;
  awayScoreValue.textContent = awayScoreCount;
}
function plusTwoAway() {
  awayScoreCount += 2;
  awayScoreValue.textContent = awayScoreCount;
}
function plusThreeAway() {
  awayScoreCount += 3;
  awayScoreValue.textContent = awayScoreCount;
}

// Home Fouls Counter
function foulsPlusHome() {
  homeFoulsCount += 1;
  homeFoulsValue.textContent = homeFoulsCount;
}
function foulsPlusAway() {
  awayFoulsCount += 1;
  awayFoulsValue.textContent = awayFoulsCount;
}

// Timer
const value = document.querySelector("#timer-value");
const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", function () {
  let minute = 10;
  let sec = 00;
  setInterval(function () {
    value.textContent = minute + " : " + sec;
    sec--;
    if (sec <= 0) {
      minute--;
      sec = 59;
    }
  }, 1000);
});
resetBtn.addEventListener("click", function () {
  location.reload();
});
