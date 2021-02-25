const gameScore = { playerScore: 0, computerScore: 0 };
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const description = document.querySelector('.description p')

function computerPlay() {
	let x = Math.floor(Math.random() * (3))
	switch (x) {
		case 0: return "rock";
		case 1: return "paper";
		case 2: return "scissors";
	}
}

function playRound() {
	computerSelection = computerPlay()
	playerSelection = this.innerText.toLowerCase();
	checkWin(playerSelection, computerSelection)
}

function checkWin(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		draw();
	} else {
		switch (playerSelection) {
			case ("rock"):
				if (computerSelection === "scissors") {
					win();
				} else {
					lose();
				}
				break;
			case ("scissors"):
				if (computerSelection === "paper") {
					win();
				} else {
					lose();
				}
				break;
			case ("paper"):
				if (computerSelection === "rock") {
					win();
				} else {
					lose();
				}
				break;
		}
	}
}

function win() {
	gameScore.playerScore++;
	playerScore.innerText = gameScore.playerScore
	description.innerText = `${playerSelection} beats ${computerSelection}, YOU WIN!`
	console.log(gameScore);
}

function lose() {
	gameScore.computerScore++
	computerScore.innerText = gameScore.computerScore
	description.innerText = `${computerSelection} beats ${playerSelection}, you lose`
	console.log(gameScore);
}

function draw() {
	description.innerText = `You chose the same weapon, DRAW`
}

const weapons = document.querySelectorAll('.weapon')
weapons.forEach(weapon => weapon.addEventListener('click', playRound))