
const getPlayerSelection = () => {
    // Get option player selected
    let playerSelection = document.getElementById("player-selection").value;
    console.log(playerSelection);
};

const getComputerSelection = () => {
    //Create an array of options
    const gameOptions = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    
    // Computer selection - grab random item from gameOptions array
    let computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)] 
    console.log(computerSelection);
};

const playRound = () => {
    getPlayerSelection();
    getComputerSelection();
};

const results = () => {

};