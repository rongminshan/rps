let choice = document.querySelectorAll(".choice");
let playerScoreText = document.getElementById("pScoreText");
let computerScoreText = document.getElementById("cScoreText");
let msgText = document.getElementById("msg");

choice.forEach(button => {
    button.addEventListener("click", (e) => {
        if(checkTrue) {
           playRound(e.target.id); 
        } 
        else {
            endGame();
        }

    });
})

function playRound(choice)
{
    let cSelection = getComputerChoice();
    let pSelection = choice;
    console.log(pSelection)
    console.log(cSelection);

    if(cSelection === "rock")
    {
        if(pSelection === "rock")
        {
            callTie();
            updateScore()
        }
        if(pSelection === "paper")
        {
            callWin();
            updateScore();
        } 
        if(pSelection === "scissors")
        {
            callLose();
            updateScore();
        }
    } 

    if(cSelection === "paper")
    {
        if(pSelection === "paper")
        {
            callTie();
            updateScore();
        }

        if(pSelection === "rock")
        {
            callLose();
            updateScore();
        }
        if(pSelection === "scissors")
        {
            callWin();
            updateScore();
        }
    }

    if(cSelection === "scissors")
    {
        if(pSelection === "scissors")
        {
            callTie();
            updateScore();
        }

        if(pSelection === "rock")
        {
            callWin();
            updateScore();
        }
        if(pSelection === "paper")
        {
            callLose();
            updateScore();
        }
    }

}

function checkTrue() {
 return true
}

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function callTie()
{
    msgText.textContent = "No one wins. It's a draw!";
}

function callWin()
{
    msgText.textContent = "You Win!";
}

function callLose()
{
    msgText.textContent = "You Lose!";
}