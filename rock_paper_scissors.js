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
        switch(playerSelection) {
            case ("rock"): 
                if (computerSelection === "scissors") {
                    return win;
                } else {
                    return lose;
                }
            case ("scissors"):
                if (computerSelection === "paper") {
                    return win;
                } else {
                    return lose;
            }
            case ("paper"):
                if (computerSelection === "rock") {
                    return win;
                } else {
                    return lose;
            }
        } 
    }
}

function game() {
    for (i = 0; i <5; i++) {
        let playerSelection = prompt("Please choose Paper, Rock or Scissors").toLowerCase();
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" ) {
            playerSelection = prompt("Wrong choice, please choose Paper, Rock or Scissors").toLowerCase();
        }
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
}