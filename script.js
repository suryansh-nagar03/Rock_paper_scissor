function game(){
    function humanChoice(){
        let choice = prompt("Play 5 rounds! Enter your choice (rock, paper, scissors): ");
        return choice.toLowerCase();
    }
    
    function computerChoice(){
        const choice = Math.random();
    
        if(choice<0.34) return 'rock';
        else if(choice<=0.67) return 'paper';
        else return 'scissors';
    }
    
    let humanScore = 0;
    let computerScore = 0;
    
    function play(comp,human){
        console.log("Your chose " + human);
        console.log("Computer chose " + comp);
        if(human === comp){
            return "It's a draw";
        }
    
        if(human === "rock"){
            if(comp === "scissors"){
                humanScore++;
                return "Rock smashes scissors! You win!";
            }
            else{
                computerScore++;
                return "Paper covers rock! You lose!";
                
            }
        }
    
        if(human === "paper"){
            if(comp === "rock"){
                humanScore++;
                return "Paper covers rock! You win!";
            }
            else{
                computerScore++;
                return "Scissors cuts paper! You lose!";
            }
        }
    
        if(human === "scissors"){
            if(comp === "paper"){
                humanScore++;
                return "Scissors cuts paper! You win!";
                
            }
            else{
                computerScore++;
                return "Rock smashes scissors! You lose!";
            }
        }
        else return "Invalid Choice";
    }

    for(let i=0;i<5;i++){
        let human = humanChoice();
        let computer = computerChoice();

        console.log(play(computer,human));
        console.log("--------------------------------");
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
        console.log("--------------------------------");
    }

    if(humanScore>computerScore){
        console.log("************************");
        console.log("You win the game!");
        console.log("************************");
    }
    else if(humanScore<computerScore){
        console.log("************************");
        console.log("Computer wins the game!");
        console.log("************************");
    }
    else{
        console.log("************************");
        console.log("It's a tie!");
        console.log("************************");
    }
}

game();