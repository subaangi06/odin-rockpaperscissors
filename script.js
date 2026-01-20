function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)+1;
    // 1 - rock, 2-paper, 3-scissors
    switch (compChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";

    }

}

let humanScore=0;
let computerScore=0;


const body = document.querySelector("body");
const outputDiv = document.createElement("div");
outputDiv.textContent = "Results will show here as each round is played!"
body.appendChild(outputDiv)

function playGame(){
    
    function playRound(humanChoice,computerChoice){
        if (computerChoice==="rock"){
            if (humanChoice==="rock"){
                //RR
                outputDiv.textContent("It's a tie!");
            } else if (humanChoice==="paper"){
                //RP
                outputDiv.textContent("You win! Paper beats rock.");
                humanScore++;
            } else {
                //RS
                outputDiv.textContent("You lose! Rock beats scissors.")
                computerScore++;
            }
        } else if (computerChoice==="paper"){
            if (humanChoice ==="rock"){
                //PR
                outputDiv.textContent("You lose! Paper beats rock.");
                computerScore++;
            } else if (humanChoice==="paper"){
                //PP
                outputDiv.textContent("It's a tie!");
            } else{
                //PS
                outputDiv.textContent("You win! Scissors beat paper.");
                humanScore++;
            }
        } else{
            if (humanChoice ==="rock"){
                //SR
                outputDiv.TextContent("You win! Rock beats scissors.");
                humanScore++;
            } else if (humanChoice ==='paper'){
                //SP
                outputDiv.TextContent("You lose! Scissors beat paper.");
                computerScore++;
            } else{
                //SS
                outputDiv.TextContent("It's a tie!");
            }
        }

    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        const computerChoice = getComputerChoice();
        const humanChoice = button.id;

        playRound(humanChoice, computerChoice);
    })
})


