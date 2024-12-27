const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const result = document.querySelector(".result");
const rock =  document.getElementById("rock-icon");
const paper =  document.getElementById("paper-icon");
const scissors =  document.getElementById("scissors-icon");

let playerCount = 0;
let compCount = 0;

function computerChoice(){
    const choice = Math.random();

    if(choice<0.34) return 'rock';
    else if(choice<=0.67) return 'paper';
    else return 'scissors';
}

function win(comp,player){
    playerCount++;
    playerScore.textContent = playerCount;
    result.textContent = `Win!! ${player} beats ${comp}`;
    if(playerCount===5){
        result.classList.add("finalResult");
        result.textContent = "You have won the match!!";
        reset();
    }
}

function lose(comp,player){
    compCount++;
    computerScore.textContent = compCount;
    result.textContent = `Alas!! ${player} looses to ${comp}`;
    if(compCount===5){
        result.classList.add("finalResult");
        result.textContent = "Alas!! Computer wins, better luck next time :(";
        reset();
    }
}

function reset(){
    playerCount = 0;
    compCount = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

function draw(comp,player){
    result.textContent = `It's a draw!! ${player} and ${comp} are equal`;
}

function play(playerSelect){
    result.classList.remove("finalResult");
    const compSelect = computerChoice();

    if((playerSelect==="rock"&&compSelect==="scissors" || playerSelect==="paper"&&compSelect==="rock"|| playerSelect==="scissors"&&compSelect==="paper" )){
        win(compSelect,playerSelect);
    }
    else if(compSelect===playerSelect){
        draw(compSelect,playerSelect);
    }
    else{
        lose(compSelect,playerSelect);
    }
}
function game(){
    let playerSelect;

    rock.addEventListener("click",()=> play("rock"));
    paper.addEventListener("click",()=> play("paper"));
    scissors.addEventListener("click",()=> play("scissors"));
}

game();