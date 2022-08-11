function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];

}
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Please choose either 'rock', 'paper' or 'scissors!").toLowerCase();

function playRound(playerSelection, computerSelection)
{
    console.log(`player ${playerSelection}`);
    console.log(`computer ${computerSelection}`);

    if(computerSelection === "rock")
    {
        if(playerSelection === "paper") console.log("You Win!");
        if(playerSelection === "scissors") console.log("You Lose");

    } else if (computerSelection === "paper")
    {
        if(playerSelection === "scissors") console.log("You Win!");
        if(playerSelection === "rock") console.log("You Lose");

    } else if (computerSelection === "scissors")
    {
        if(playerSelection === "rock") console.log("You Win!");
        if(playerSelection === "paper") console.log("You Lose");

    } else {
        console.log("No One wins! Tie!");
    }
}

playRound(playerChoice, computerChoice);