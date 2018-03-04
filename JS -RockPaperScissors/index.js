
const getPlayerSelection = () => {
    // Get option player selected
    let playerSelection = document.getElementById("player-selection").value;
    let showPlayerSelection = document.getElementById("selection").innerHTML = playerSelection;
    
    return playerSelection;
};

const getComputerSelection = () => {
    //Create an array of options
    const gameOptions = ["Rock", "Paper", "Scissors"];

    // Computer selection - grab random item from gameOptions array
    let computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];

    return computerSelection;
};

const playRound = () => {
    getPlayerSelection();
    getComputerSelection();
    //console.log(getComputerSelection(), getPlayerSelection());
    
};