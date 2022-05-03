var box = document.querySelector('.box');
var table = document.querySelector('.table');
var startBtn = document.querySelector('.startBtn');
var round = document.querySelector('#round');

var player1 = "";
var player2 = "";
var player1TotalScore = 0;
var player2TotalScore = 0;

var player1Btn = document.getElementById('player1Btn');
var player2Btn = document.getElementById('player2Btn');

var player1Score = document.getElementById('player1Score');
var player2Score = document.getElementById('player2Score');


var player1CurrentScore = document.getElementById('player1CurrentScore');
var player2CurrentScore = document.getElementById('player2CurrentScore');

var player1Div = document.querySelector('.player1Div');
var player2Div = document.querySelector('.player2Div');

var totalScore = document.querySelector('#totalScore');
var unsolved = document.querySelector('#unsolved');




var counter = 1;


startBtn.focus();
startBtn.addEventListener('click', askForNames);
startAgain.addEventListener('click', clearInputs);

function askForNames() {
  player1 = prompt("Name of Player 1:");
  player2 = prompt("Name of Player 2:");
  startgame();
}
function startgame() {
  startBtn.style.display = "none";
  table.style.display = "block";
  round.style.display = "block";
  player1Name.innerHTML = player1;
  player2Name.innerHTML = player2;
  player1Btn.addEventListener('click', player1Roll);
  player2Btn.addEventListener('click', player2Roll);
}
function player1Roll() {


  counter += 0.5;

  this.setAttribute('disabled', 'disabled');
  player2Btn.removeAttribute('disabled');
  var random = Math.floor(Math.random()*6+1);
  player1TotalScore += random;
  player1CurrentScore.innerHTML = random;
  player1Score.innerHTML = player1TotalScore;
  if (Math.floor(counter)<6) {
    round.innerHTML = Math.floor(counter);
  }else {
    gameOver();
  }
}
function player2Roll() {


  counter += 0.5;

  this.setAttribute('disabled', 'disabled');
  player1Btn.removeAttribute('disabled');
  var random = Math.floor(Math.random()*6+1);
  player2TotalScore += random;
  player2CurrentScore.innerHTML = random;
  player2Score.innerHTML = player2TotalScore;
  if (Math.floor(counter)<6) {
    round.innerHTML = Math.floor(counter);
  }else {
    gameOver();
  }
}

function gameOver() {
  player1Btn.setAttribute('disabled', 'disabled');
  player2Btn.setAttribute('disabled', 'disabled');
  startAgain.style.display = "block";
  if (player1TotalScore > player2TotalScore) {
    player1Div.style.background ="#cbff7c";
  }else if (player1TotalScore < player2TotalScore) {
    player2Div.style.background ="#cbff7c";
  }else {
    player1Div.style.background ="tomato";
    player2Div.style.background ="tomato";
    unsolved.style.display = "block";
    totalScore.style.display ="none";
  }
}

function clearInputs() {
  counter = 1;
  player1CurrentScore.innerHTML = "0";
  player2CurrentScore.innerHTML = "0";
  player1Score.innerHTML = "0";
  player2Score.innerHTML = "0";
  player1Btn.removeAttribute('disabled');
  player2Btn.removeAttribute('disabled');
  player1Div.style.background = "none";
  player2Div.style.background = "none";
  startAgain.style.display = "none";
  player1TotalScore = 0;
  player2TotalScore = 0;
  round.innerHTML = "1";
  unsolved.style.display = "none";
  totalScore.style.display ="block";
}
