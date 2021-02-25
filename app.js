const gameScore = { playerScore: 0, computerScore: 0 };
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const description = document.querySelector('.description p')
const winScore = document.querySelector('#winScore')
const weapons = document.querySelectorAll('.weapon')

weapons.forEach(weapon => weapon.addEventListener('click', playRound))
let winScoreValue = Number(winScore.value);
winScore.addEventListener('change', () => {
	winScoreValue = Number(winScore.value)
	reset();
})

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
	if (gameScore.playerScore === winScoreValue || gameScore.computerScore === winScoreValue) {
		keepPlaying = false
	}
	if (gameScore.playerScore === winScoreValue) {
		playerScore.classList.add('green');
		computerScore.classList.add('red');
	} else if (gameScore.computerScore === winScoreValue) {
		playerScore.classList.add('red');
		computerScore.classList.add('green');
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

function reset() {
	Object.keys(gameScore).forEach(key => {
		gameScore[key] = 0;
	});
	playerScore.innerText = gameScore.playerScore;
	playerScore.classList.remove('green');
	playerScore.classList.remove('red');
	computerScore.classList.remove('green');
	computerScore.classList.remove('red');
	computerScore.innerText = gameScore.computerScore;
	keepPlaying = true
}

