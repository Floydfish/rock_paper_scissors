const gameScore = { playerScore: 0, computerScore: 0 };
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const description = document.querySelector('.description p')

let winScore = 5
let keepPlaying = true

function computerPlay() {
	let x = Math.floor(Math.random() * (3))
	switch (x) {
		case 0: return "rock";
		case 1: return "paper";
		case 2: return "scissors";
	}
}

function runGame() {
	while (keepPlaying) {
		playRound();
	}
}

function playRound() {
	computerSelection = computerPlay()
	playerSelection = this.innerText.toLowerCase();
	if (keepPlaying) {
		checkWin(playerSelection, computerSelection)
	} 
	if (gameScore.playerScore === winScore || gameScore.computerScore === winScore) {
		keepPlaying = false
	}
}

function checkWin(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		draw();
	} else {
		switch (playerSelection) {
			case ("rock"):
				if (computerSelection === "scissors") {
					winRound();
				} else {
					loseRound();
				}
				break;
			case ("scissors"):
				if (computerSelection === "paper") {
					winRound();
				} else {
					loseRound();
				}
				break;
			case ("paper"):
				if (computerSelection === "rock") {
					winRound();
				} else {
					loseRound();
				}
				break;
		}
	}
}

function winRound() {
	gameScore.playerScore++;
	playerScore.innerText = gameScore.playerScore
	description.innerText = `${playerSelection} beats ${computerSelection}, YOU WIN!`
}

function loseRound() {
	gameScore.computerScore++
	computerScore.innerText = gameScore.computerScore
	description.innerText = `${computerSelection} beats ${playerSelection}, you lose`
}

function draw() {
	description.innerText = `You chose the same weapon, DRAW`
}

const weapons = document.querySelectorAll('.weapon')
weapons.forEach(weapon => weapon.addEventListener('click', playRound))