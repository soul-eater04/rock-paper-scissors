function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
  }
  
    function play(e,p,c) {
      let computerSelection = getComputerChoice();
      console.log(e.target.textContent.toLowerCase()+" "+computerSelection);
      
      // e.target.textContent = e.target.textContent.toLowerCase();
      // p.textContent = e.target.textContent
      // playerSelection = playerSelection.toLowerCase();
    if (e.target.textContent.toLowerCase() === computerSelection) {
      p.textContent = String(p.textContent);
      c.textContent = String(c.textContent);
    } else if (
      (e.target.textContent.toLowerCase()=== "rock" && computerSelection === "scissor") ||
      (e.target.textContent.toLowerCase() === "paper" && computerSelection === "rock") ||
      (e.target.textContent.toLowerCase() === "scissor" && computerSelection === "paper")
      ) {
        p.textContent = String(Number(p.textContent)+1);
      } else {
        c.textContent = String(Number(c.textContent)+1);
      }
    }
    
    function game(){
    const body = document.querySelector('body');
    const btn1 = document.createElement('button');
    btn1.textContent = "ROCK";
    const btn2 = document.createElement('button');
    btn2.textContent = "PAPER";
    const btn3 = document.createElement('button');
    btn3.textContent = "SCISSOR";
    body.appendChild(btn1);
    body.appendChild(btn2);
    body.appendChild(btn3);
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = "RESULT";
    const p = document.createElement('p');
    const c = document.createElement('p');
    p.textContent = 0;
    c.textContent = 0;
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(c);
    body.appendChild(div);
    btn1.addEventListener('click', (e) => play(e,p,c));
    btn2.addEventListener('click', (e) => play(e,p,c));
    btn3.addEventListener('click', (e) => play(e,p,c));

    // let playerSelection;
    // let computerSelection;
    // playerSelection = prompt("Enter your choice:");
    // computerSelection = getComputerChoice();
    // let result = play(playerSelection,computerSelection);
    // console.log(computerSelection)
    // console.log(result);
  }

game();