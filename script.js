function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];

}

function getPlayerChoice()
{
    let playerChoice = prompt("Please choose either 'rock', 'paper' or 'scissors!").toLowerCase();
    return playerChoice;
}
    

function playRound(playerSelection, computerSelection)
{
    console.log(`player ${playerSelection}`);
    console.log(`computer ${computerSelection}`);

    if(computerSelection === "rock")
    {
        if(playerSelection === "paper") console.log("You Win!");
        if(playerSelection === "scissors") console.log("You Lose");
        if(playerSelection === "rock") console.log("No one wins! Tie!");

    } else if (computerSelection === "paper")
    {
        if(playerSelection === "scissors") console.log("You Win!");
        if(playerSelection === "rock") console.log("You Lose");
        if(playerSelection === "paper") console.log("No one wins! Tie!");

    } else if (computerSelection === "scissors")
    {
        if(playerSelection === "rock") console.log("You Win!");
        if(playerSelection === "paper") console.log("You Lose");
        if(playerSelection === "scissors") console.log("No one wins! Tie!")

    } else{
        console.log("no one answered anything")
    }
}

function game()
{
    for(let i=0; i<5; i++)
    {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Please choose either 'rock', 'paper' or 'scissors!").toLowerCase();
        playRound(playerChoice, computerChoice);        
    }
}

game();