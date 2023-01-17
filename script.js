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
        console.log(`Player selected ${playerSelection} and Computer selected ${computerSelection} its a tie!`)
    }
    //Player selects Rock
    else if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            console.log(`${playerSelection} crushes ${computerSelection}, player wins!`)
            playerWin = true;  
        }
        else { //paper
            console.log(`${playerSelection} gets covered by ${computerSelection}, computer wins!`)
            playerWin = false;
        }  
    }
    //Player selects Paper
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            console.log(`${playerSelection} gets cut by ${computerSelection}, computer wins!`)
            playerWin = false;  
        }
        else { //rock
            console.log(`${playerSelection} covers ${computerSelection}, player wins!`)
            playerWin = true;
        }  
    }
    //Player selects Scissors
    else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            console.log(`${playerSelection} cuts ${computerSelection}, player wins!`)
            playerWin = true;  
        }
        else { //rock
            console.log(`${playerSelection} gets crushed by ${computerSelection}, computer wins!`)
            playerWin = false;
        }  
    }
    return playerWin;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    //We want to play 5 rounds
    for (i = 1; i <= 5; i++){
        //Get new values for each round
        const playerSelection = prompt("Enter rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        //Count rounds
        console.log(`Round ${i}`);
        //Store the result of playerWin so we can give points
        let roundResult = playRound(playerSelection,computerSelection);
        if (roundResult == true){
            playerScore ++;
        }
        else if (roundResult == false){
            computerScore ++;
        }
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    //Announce the winner and amount of points
    if (playerScore > computerScore){
        console.log(`Player wins with ${playerScore} points!`);
    }
    else {
        console.log(`Computer wins with ${computerScore} points!`);
    }
}

//Start a 5 round game
game();