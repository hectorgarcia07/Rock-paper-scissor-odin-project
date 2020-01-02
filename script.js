function computerPlay(){
    let compChoice = Math.floor(Math.random() * 3);
    if(compChoice === 0)
        return "rock";
    else if(compChoice === 1)
        return "paper";
    else
        return "scissor";
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'rock')
        return ["It's a tie!", "tie"];
    else if(playerSelection === 'rock' && computerSelection === 'paper')
        return ["You lose! Paper beats Rock!", "lose"];
    else if(playerSelection === 'rock' && computerSelection === 'scissor')
        return ["You win! Rock beats Scissors!", "win"];
    else if(playerSelection === 'paper' && computerSelection === 'rock')
        return ["You win! Paper beats Rock", "win"];
    else if(playerSelection === 'paper' && computerSelection === 'paper')
        return ["It's a tie!", "tie"];
    else if(playerSelection === 'paper' && computerSelection === 'scissor')
        return ["You lose! Scissors beats paper!","lose"];
    else if(playerSelection === 'scissor' && computerSelection === 'rock')
        return ["You lose! Rock beats Scissors", "lose"];
    else if(playerSelection === 'scissor' && computerSelection === 'paper')
        return ["You win! Scissors beats paper!","win"];
    else if(playerSelection === 'scissor' && computerSelection === 'scissor')
        return ["It's a tie!","tie"];
}
function game(){
    let win = 0;
    let lose = 0;
    let playerSelection = '';
    let result = '';

    for(let i = 0; i < 5; i++){
        playerSelection = window.prompt("Choice: ");
        result = playRound(playerSelection, computerPlay());
        if(result[1] === "win")
            win++;
        else if(result[1] === "lose")
            lose++;
        
        console.log(result[0]);
    }
    console.log(`Win: ${win} Lose: ${lose}`);
}