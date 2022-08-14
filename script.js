let choice = document.querySelectorAll(".button");
let playerScoreText = document.getElementById("pScoreText");
let computerScoreText = document.getElementById("cScoreText");
let msgText = document.getElementById("msg");

let playerScore = 0;
let computerScore = 0;

function playRound()
{
    choice.forEach((button) => {
        button.addEventListener("click", (e) => {
            let playerSelection = e.target.id;
            let computerSelection = getComputerSelection();
            if(playerSelection === "rock")
            {
                if(computerSelection === "rock") {
                    callTie(playerSelection, computerSelection);
                }
                if(computerSelection === "paper") {
                    callLose(playerSelection, computerSelection);
                }
                if(computerSelection === "scissors") {
                    callWin(playerSelection, computerSelection);
                }
            }  

            if(playerSelection === "paper")
            {
                if(computerSelection === "paper") {
                    callTie(playerSelection, computerSelection);
                }
                if(computerSelection === "scissors") {
                    callLose(playerSelection, computerSelection);
                }
                if(computerSelection === "rock") {
                    callWin(playerSelection, computerSelection);
                }
            }

            if(playerSelection === "scissors")
            {
                if(computerSelection === "scissors") {
                    callTie(playerSelection, computerSelection);
                }
                if(computerSelection === "rock") {
                    callLose(playerSelection, computerSelection);
                }
                if(computerSelection === "paper") {
                    callWin(playerSelection, computerSelection);
                }
            }
        })
    })
}

function getComputerSelection()
{
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function callTie(playerSelection, computerSelection)
{
    msgText.textContent = `It's a tie! Player chose ${playerSelection} and computer chose ${computerSelection}`;
    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore
}

function callLose(playerSelection, computerSelection)
{
    msgText.textContent = `It's a lose! Player chose ${playerSelection} and computer chose ${computerSelection}`;
    computerScore += 1;
    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
}

function callWin(playerSelection, computerSelection)
{
    msgText.textContent = `It's a win! Player chose ${playerSelection} and computer chose ${computerSelection}`;
    playerScore += 1;
    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
}

function endGame()  
{
    choice.forEach(el => {
        el.disabled = true;
    })
}
playRound();