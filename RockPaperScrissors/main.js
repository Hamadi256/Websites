window.onload = function() {
    let playerScore = document.getElementById("playerS");
    let computerScore = document.getElementById("computerS");
    let result = document.getElementById("result");

    let rock = document.getElementById("Rock");
    let paper = document.getElementById("Paper");
    let scissors = document.getElementById("Scissors");

    let currentPlayerScore = 0;
    let currentComputerScore = 0;

    rock.onclick = function() {
        logic(1);
    }

    paper.onclick = function() {
        logic(2);
    }

    scissors.onclick = function() {
        logic(3);
    }

    function logic(playerChoice) {
        let computerChoice = Math.floor(Math.random() * 3) + 1;

        console.log(computerChoice);

        if(computerChoice == playerChoice) {
            result.innerHTML = "tie";
        }

        else if(playerChoice == 1 && computerChoice == 3 || playerChoice == 2 && computerChoice == 1 || playerChoice == 3 && computerChoice == 2) {
            result.innerHTML = "Player wins!"
            currentPlayerScore++;
            playerScore.innerHTML = currentPlayerScore;
        }

        else {
            result.innerHTML = "You lose!"
            currentComputerScore++;
            computerScore.innerHTML = currentComputerScore;
        }
    }
}