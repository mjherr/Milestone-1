// variables

const space = document.querySelectorAll(".grid-container");
const PlayerX = 'X';
const PlayerO = 'O';

const victoryCheck = Array(space.length);
victoryCheck.fill(null);

//elements of the game

const strike = document.getElementById("strike");
const scoreArea = document.getElementById("score-area");
const gameOver = document.getElementById("endgame-text");
const playAgain = document.getElementById("play-again");