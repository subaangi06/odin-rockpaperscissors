function getComputerChoice(){
    compChoice = Math.floor(Math.random()*3)+1;
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

//function to prompt user for their choice
function getHumanChoice(){
    choice = prompt("Enter your choice, rock, paper or scissors?").toLowerCase();
}

//initializing score variables
var humanScore=0;
var computerScore=0;

//syntax for a single round of the game
function playRound(humanChoice,computerChoice){
    if (computerChoice==="rock"){
        if (humanChoice==="rock"){
            //RR
            console.log("It's a tie!");
        } else if (humanChoice==="paper"){
            //RP
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else {
            //RS
            console.log("You lose! Rock beats scissors.")
            computerScore++;
        }
    } else if (computerChoice==="paper"){
        if (humanChoice ==="rock"){
            //PR
            console.log("You lose! Paper beats rock.");
            computerScore++;
        } else if (humanChoice==="paper"){
            //PP
            console.log("It's a tie!");
        } else{
            //PS
            console.log("You win! Scissors beat paper.");
            humanScore++;
        }
    } else{
        if (humanChoice ==="rock"){
            //SR
            console.log("You win! Rock beats scissors.");
            humanScore++;
        } else if (humanChoice ==='paper'){
            //SP
            console.log("You lose! Scissors beat paper.");
            computerScore++;
        } else{
            //SS
            console.log("It's a tie!");
        }
    }

}


//storing choices in respective variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//loop for 5 rounds
for(let i=0; i<5; i++){
    playRound();
}
