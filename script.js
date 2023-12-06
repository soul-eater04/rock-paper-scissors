function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You Win!";
    } else {
      return "You Lose!";
    }
  }
  
  function game(){
    let playerSelection;
    let computerSelection;
    for(let i = 0 ; i < 5 ; i++){
        playerSelection = prompt("Enter your choice:");
        computerSelection = getComputerChoice();
        let result = play(playerSelection,computerSelection);
        console.log(computerSelection)
        console.log(result);
    }
  }
game();