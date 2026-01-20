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
const choiceDiv = document.createElement("div");
choiceDiv.textContent = "The choice that each player makes wil be shown here.";
body.appendChild(choiceDiv);

const outputDiv = document.createElement("div");
outputDiv.textContent = "Round outcome will be shown as the game progresses here!";
body.appendChild(outputDiv)

const scoreDiv = document.createElement('div');
scoreDiv.textContent = "Scores will update here after every round!";
body.appendChild(scoreDiv);


function playRound(humanChoice,computerChoice){
    if (computerChoice==="rock"){
        if (humanChoice==="rock"){
            //RR
            outputDiv.textContent= "It's a tie!";
        } else if (humanChoice==="paper"){
            //RP
            outputDiv.textContent = "You win! Paper beats rock.";
            humanScore++;
        } else {
            //RS
            outputDiv.textContent = "You lose! Rock beats scissors.";
            computerScore++;
        }
    } else if (computerChoice==="paper"){
        if (humanChoice ==="rock"){
            //PR
            outputDiv.textContent = "You lose! Paper beats rock.";
            computerScore++;
        } else if (humanChoice==="paper"){
            //PP
            outputDiv.textContent = "It's a tie!";
        } else{
            //PS
            outputDiv.textContent = "You win! Scissors beat paper.";
            humanScore++;
        }
    } else{
        if (humanChoice ==="rock"){
            //SR
            outputDiv.textContent = "You win! Rock beats scissors.";
            humanScore++;
        } else if (humanChoice ==='paper'){
            //SP
            outputDiv.textContent = "You lose! Scissors beat paper.";
            computerScore++;
        } else{
            //SS
            outputDiv.textContent = "It's a tie!";
        }
    }
    if (computerChoice == humanChoice) {
        choiceDiv.textContent = `Both players made the choice of ${computerChoice}`;
    } else{
        choiceDiv.textContent = `The choice that the computer made is: ${computerChoice}. The choice that you made is: ${humanChoice}`;
    }
    scoreDiv.textContent = `Scores: Your score is ${humanScore}, the computer's score is ${computerScore}`;

}
const buttons = document.querySelectorAll("button");

function resetGame(){
    humanScore = 0;
    computerScore = 0;

    choiceDiv.textContent = "The choice that each player makes wil be shown here.";
    //reappend child since it was removed when displaying winner
    body.appendChild(choiceDiv);
    outputDiv.textContent = "Round outcome will be shown as the game progresses here!";
    scoreDiv.textContent = "Scores will update here after every round!";


}

function checkWinner(){
    if (humanScore ===5){
        body.removeChild(choiceDiv);
        alert("You win!! Great job :)");
        alert("The game will reset now!");
        resetGame();

        
    } else if (computerScore===5){
        body.removeChild(choiceDiv);
        alert("Sorry, the computer won :( Better luck next time!!");
        alert("The game will reset now!");
        resetGame();
        
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        if (humanScore<5 && computerScore<5){
            const computerChoice = getComputerChoice();
            const humanChoice = button.id;
            playRound(humanChoice, computerChoice);
            
            //allow website to update the text before checking for a winner
            setTimeout(() => {
                checkWinner();
            }, 5)
        }

    })
})


