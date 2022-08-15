let choice = document.querySelectorAll(".button");
let playerScoreText = document.getElementById("pScoreText");
let computerScoreText = document.getElementById("cScoreText");
let msgText = document.getElementById("msg");
let reset = document.getElementById("play-again");

let playerScore = 0;
let computerScore = 0;

function playRound()
{
    choice.forEach((button) => {
        checkScores();
        button.addEventListener("click", (e) => {
            let playerSelection = e.target.id;
            let computerSelection = getComputerSelection();
            if(playerSelection === "rock")
            {
                if(computerSelection === "rock") {
                    callTie(playerSelection, computerSelection);
                    checkScores();
                }
                if(computerSelection === "paper") {
                    callLose(playerSelection, computerSelection);
                    checkScores();
                }
                if(computerSelection === "scissors") {
                    callWin(playerSelection, computerSelection);
                    checkScores();
                }
            }  

            if(playerSelection === "paper")
            {
                if(computerSelection === "paper") {
                    callTie(playerSelection, computerSelection);
                    checkScores();
                }
                if(computerSelection === "scissors") {
                    callLose(playerSelection, computerSelection);
                    checkScores();
                }
                if(computerSelection === "rock") {
                    callWin(playerSelection, computerSelection);
                    checkScores();
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

function checkScores()
{
    if(playerScore === 5 || computerScore === 5) endGame();
}

function endGame()  
{
    choice.forEach(el => {
        el.disabled = true;
    })
    msgText.textContent = "Thank you for playing! Please click the button below to play again!";
    reset.style.display = "block";
}

reset.addEventListener("click", () => {
    window.location.reload();  
})
playRound();