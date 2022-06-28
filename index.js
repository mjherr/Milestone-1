// variables

const space = document.querySelectorAll(".grid-container");
const PlayerX = 'X';
const PlayerO = 'O';
const turn = PlayerX;

const victoryCheck = Array(space.length);
victoryCheck.fill(null);

//elements of the game

const strike = document.getElementById("strike");
const scoreArea = document.getElementById("score-area");
const gameOver = document.getElementById("endgame-text");
const playAgain = document.getElementById("play-again");

//clicks functions

box.forEach((boxes) => boxes.addEventListener ("click", boxClick));

function boxClick(event) {
    if (scoreArea.classList.contains('visible')) {
        return;
    }
    const boxes = event.target;
    const boxNumber = boxes.dataset.index;
    if (boxes.innerText != ""){
        return;
    }
    if (turn)
}