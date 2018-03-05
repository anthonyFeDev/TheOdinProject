
const getPlayerSelection = () => {
    // Get option player selected
    let playerSelection = document.getElementById("player-selection").value;
    playerSelection = playerSelection.toLowerCase();
    let showPlayerSelection = document.getElementById("selection").innerHTML = playerSelection;

    return playerSelection;
};

const getComputerSelection = () => {
    //Create an array of options
    const gameOptions = [ "paper", "rock", "scissors"];
    
    // Computer selection - grab random item from gameOptions array
    let computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    let showComputerSelection = document.getElementById("comp-selection").innerHTML = computerSelection;
    return computerSelection;
};

const playRound = () => {
    getPlayerSelection();
    getComputerSelection();

    let computerPick = getComputerSelection();
    let playerPick = getPlayerSelection();
    
    let winner = "";

    if (playerPick == 'rock' && computerPick == 'rock') {
        winner = document.getElementById("winner").innerHTML = "it's a tie";
    } else if (playerPick == 'rock' && computerPick == 'paper') {
        winner = document.getElementById("winner").innerHTML = "You lose";
    } else if (playerPick == 'rock' && computerPick == 'scissors') {
        winner = document.getElementById("winner").innerHTML = "You won!";
    } else if (playerPick == 'paper' && computerPick == 'scissors') {
        winner = document.getElementById("winner").innerHTML = "You lose";
    } else if (playerPick == 'paper' && computerPick == 'rock') {
        winner = document.getElementById("winner").innerHTML = "You won!";
    } else if (playerPick == 'paper' && computerPick == 'paper') {
        winner = document.getElementById("winner").innerHTML = "It's a tie";
    } else if (playerPick == 'scissors' && computerPick == 'paper') {
        winner = document.getElementById("winner").innerHTML = "You won!";
    } else if (playerPick == 'scissors' && computerPick == 'rock') {
        winner =document.getElementById("winner").innerHTML = "You lose";
    } else if (playerPick == 'scissors' && computerPick == 'scissors') {
        winner = document.getElementById("winner").innerHTML = "It's a tie";
    }
    
};