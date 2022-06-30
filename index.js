// variables

const space = document.querySelectorAll(".boxes");
const PlayerX = "X";
const PlayerO = "O";
let turn = PlayerX;

const victoryCheck = Array(space.length);
victoryCheck.fill(null);

//elements of the game

const strike = document.getElementById("strike");
const scoreArea = document.getElementById("score-area");
const gameOver = document.getElementById("endgame-text");
const playAgain = document.getElementById("play-again");

//click functions

space.forEach((boxes) => boxes.addEventListener("click", boxClick));

function boxClick(event) {
    if (scoreArea.classList.contains("visible")) {
        return;
    }
    const box = event.target;
    const boxNumber = box.dataset.index;
    if (box.innerText != ""){
        return;
    }
    if (turn === PlayerX) {
        box.innerText = PlayerX;
        victoryCheck[boxNumber - 1] = PlayerX;
        turn = PlayerO;
    }
    else {
        box.innerText = PlayerO;
        victoryCheck[boxNumber - 1] = PlayerO;
        turn = PlayerX;
    }
}