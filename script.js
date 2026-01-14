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

//function to prompt user for their choice
function getHumanChoice(){
    choice = prompt("Enter your choice, rock, paper or scissors?").toLowerCase();
    return choice;
}


function playGame(){
    //initializing score variables
    let humanScore=0;
    let computerScore=0;    

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

    //looping 5 times for 5 separate rounds of rock paper scissors.     
    for(let i=1; i<=5; i++){
        //storing choices in respective variables
        console.log(`Round ${i}`)
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();    
        console.log(`You chose ${humanSelection} and the computer chose ${computerSelection}`);
        playRound(humanSelection, computerSelection);
    }

    //function to calculate the user with higer score. 
    function calcWinner(cScore, hScore){
        if (cScore > hScore){
            console.log("The computer scored higher than you :(. The computer wins!!");
        } else if (hScore>cScore){
            console.log("You scored higher than the computer :) You win!!");
        } else{
            console.log("You both scored an equal number of points, you both win!!");
        }
    }

    calcWinner(computerScore, humanScore);

}

playGame();
