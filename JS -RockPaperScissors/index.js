//Create an array of options
const gameOptions = [
    "Rock",
    // "Paper",
    // "Scissors"
];

const getPlayerSelection = () => {
    // Get option player selected
    let playerSelection = document.getElementById("player-selection").value;
    console.log(playerSelection);
};

const getComputerSelection = () => {
    // Computer selection - grab random item from gameOptions array
    let computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)] 
    console.log(computerSelection);
};

const playRound = () => {
    getPlayerSelection();
    getComputerSelection();
};
