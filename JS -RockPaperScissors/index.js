//Create an array of options
const gameOptions = [
    "Rock",
    "Paper",
    "Scissors"
];

const playRound = () => {
    // Get option player selected
    let playerSelection = document.getElementById("player-selection").value;
    console.log(playerSelection);

    // Computer selection - grab random item from gameOptions array
    let computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)] 
    console.log(computerSelection);
};

const game = () => {

};