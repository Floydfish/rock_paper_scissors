function computerPlay() {
	let x = Math.floor(Math.random() * (3))
	switch (x) {
		case 0: return "rock";
		case 1: return "paper";
		case 2: return "scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	let win = `You win! ${playerSelection} beats ${computerSelection}!`;;
	let lose = `You lose! ${computerSelection}! beats ${playerSelection}!`;
	let draw = `Draw! Both players chose ${playerSelection}`;
	if (playerSelection === computerSelection) {
		return draw;
	} else {
		switch (playerSelection) {
			case ("rock"):
				if (computerSelection === "scissors") {
					gameScore.playerScore++
					return win;
				} else {
					gameScore.computerScore++
					return lose;
				}
			case ("scissors"):
				if (computerSelection === "paper") {
					gameScore.playerScore++
					return win;
				} else {
					gameScore.computerScore++
					return lose;
				}
			case ("paper"):
				if (computerSelection === "rock") {
					gameScore.playerScore++
					return win;
				} else {
					gameScore.computerScore++
					return lose;
				}
		}
	}
}

function playerPlay() {
	let play = prompt("Please choose Paper, Rock or Scissors").toLowerCase();
	while (play != "rock" && play != "paper" && play != "scissors") {
		play = prompt("Wrong choice, please choose Paper, Rock or Scissors").toLowerCase();
	}
	return play
}

function game() {
	for (i = 0; i < 5; i++) {
		const playerSelection = playerPlay()
		const computerSelection = computerPlay()
		console.log(playRound(playerSelection, computerSelection))
		console.log(gameScore)
	}
}

let gameScore = { playerScore: 0, computerScore: 0 }