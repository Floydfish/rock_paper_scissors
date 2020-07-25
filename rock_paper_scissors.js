function computerPlay() {
    let x = Math.floor(Math.random() * (3))
    switch (x) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return (`Draw! Both players chose ${playerSelection}`);
    } else {
    switch(playerSelection) {
        case (playerSelection === "rock"): // Stoped here
            if (/computerSelection/i == Scissors) {
            return ("You win! " + playerSelection.toString() + " beats " + computerSelection.toString() + "!")
        } else {
            return ("You lose! " + computerSelection.toString() + " beats " + playerSelection.toString() + "!")
        }
        case (/playerSelection/i == Scissors):
            if (/computerSelection/i == Paper) {
            return ("You win! " + playerSelection.toString() + " beats " + computerSelection.toString() + "!")
        } else {
            return ("You lose! " + computerSelection.toString() + " beats " + playerSelection.toString() + "!")
        }
        case (/playerSelection/i == Paper):
            if (/computerSelection/i == Rock) {
                return ("You win! " + playerSelection.toString() + " beats " + computerSelection.toString() + "!")
        } else {
            return ("You lose! " + computerSelection.toString() + " beats " + playerSelection.toString() + "!")
        }
    } 
    }
}

function game() {
    let playerSelection = prompt("Please choose Paper, Rock or Scissors").toLowerCase
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" ) {
        playerSelection = prompt("Wrong choice, please choose Paper, Rock or Scissors").toLowerCase
    }
    for (i = 0; i <5; i++) {
        const computerSelection = computerPlay()
        //console.log(playRound(playerSelection, computerSelection))
        function playRound(selection, computerSelection) {
        if (Selection == computerSelection) {
            return ("Draw! " + selection + " and " + computerSelection + " are the same.");
        } else {
        switch(selection) {
            case (selection == "rock"):
                if (computerSelection == "scissors") {
                return ("You win! " + playerSelection.toString() + " beats " + computerSelection.toString() + "!")
            } else {
                return ("You lose! " + computerSelection.toString() + " beats " + playerSelection.toString() + "!")
            }
            case (selection == "scissors"):
                if (computerSelection == "paper") {
                return ("You win! " + playerSelection.toString() + " beats " + computerSelection.toString() + "!")
            } else {
                return ("You lose! " + computerSelection.toString() + " beats " + playerSelection.toString() + "!")
            }
            case (selection == "paper"):
                if (computerSelection == "rock") {
                    return ("You win! " + playerSelection.toString() + " beats " + computerSelection.toString() + "!")
            } else {
                return ("You lose! " + computerSelection.toString() + " beats " + playerSelection.toString() + "!")
            }
            } 
            }
            }
    }
}