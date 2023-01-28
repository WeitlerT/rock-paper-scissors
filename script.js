let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let compChoice;
    //Using random number gen to pick between 0-3
    let randomNum = getRandomInt(3);
    //Number will equate to Rock, Paper, or Scissor
    if (randomNum == 0){
        compChoice = "Rock";
    }
    else if (randomNum == 1){
        compChoice = "Paper"
    }
    else{
        compChoice = "Scissors"
    }
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //Bool to check if player won a point or not it is undefined if there is tie
    let playerWin;

    console.log("Player selected " + playerSelection);
    console.log("Computer selected " + computerSelection);

    //Check if choice is the same
    if (playerSelection == computerSelection){
        roundResult.innerText = (`Player selected ${playerSelection} and Computer selected ${computerSelection} its a tie!`);
    }
    //Player selects Rock
    else if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            roundResult.innerText = (`${playerSelection} crushes ${computerSelection}, player wins!`)
            playerWin = true;  
        }
        else { //paper
            roundResult.innerText = (`${playerSelection} gets covered by ${computerSelection}, computer wins!`)
            playerWin = false;
        }  
    }
    //Player selects Paper
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            roundResult.innerText = (`${playerSelection} gets cut by ${computerSelection}, computer wins!`)
            playerWin = false;  
        }
        else { //rock
            roundResult.innerText = (`${playerSelection} covers ${computerSelection}, player wins!`)
            playerWin = true;
        }  
    }
    //Player selects Scissors
    else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            roundResult.innerText = (`${playerSelection} cuts ${computerSelection}, player wins!`)
            playerWin = true;  
        }
        else { //rock
            roundResult.innerText = (`${playerSelection} gets crushed by ${computerSelection}, computer wins!`)
            playerWin = false;
        }  
    }
    return playerWin;
}

function game(playerSelection)
{
    if (playerScore == 5|| computerScore == 5){
        if (playerScore > computerScore){
            console.log("Player wins the game!");
            return;
        }
        else
        {
            console.log("Computer wins the game!");
            return;
        }
    }
    //Get new values for each round
    const computerSelection = getComputerChoice();
    //Store the result of playerWin so we can give points
    let roundResult = playRound(playerSelection,computerSelection);
    if (roundResult == true){
        playerScore ++;
    }
    else if (roundResult == false){
        computerScore ++;
    }
    // console.log(`Player Score: ${playerScore}`);
    // console.log(`Computer score: ${computerScore}`);
    pScore.innerText = (`Player Score: ${playerScore}`);
    cScore.innerText =(`Computer score: ${computerScore}`);
}

const rockBtn = document.getElementById('rbtn');
const papperBtn = document.getElementById('pbtn');
const scissorBtn = document.getElementById('sbtn');
let roundResult = document.getElementById('roundResult');
let pScore = document.getElementById('pScore');
let cScore = document.getElementById('cScore');

rockBtn.addEventListener('click', () =>{
    game('rock')
}); 

papperBtn.addEventListener('click', () =>{
    game('paper')
}); 

scissorBtn.addEventListener('click', () =>{
    game('scissors')
}); 