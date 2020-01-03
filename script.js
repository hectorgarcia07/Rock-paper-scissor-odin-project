//will hold round result
var rounds = 0;
var win = 0;
var loss = 0;

//holds players choice for easy access
var rockOption = document.getElementById("rock");
var paperOption = document.getElementById("paper");
var scissorOption = document.getElementById("scissor");

//will hold Final result to display win/loss/tie
var finalResult = document.getElementById("finalResult");

//will be used to display what choice the player/computer made
//on the screen
var strPlayer = document.getElementById("playerChoice");
var strComp = document.getElementById("computerChoice");

//will be used to show if you won or lost the round
var strRound = document.getElementById("roundResult");

//will hold tiles to change color based on win/loss/tie
var tiles = document.getElementsByClassName("score-tile");

//hold the 'reset' button when a game as been compleated
var reset = document.getElementById("reset");

//play a round of rock paper scissors when option is clicked
rockOption.addEventListener('click', () => {
    game('rock');
});
paperOption.addEventListener('click', () => {
    game('paper');
});
scissorOption.addEventListener('click', () => {
    game('scissor');
});

//will reset score/tiles/and hide score and result
reset.addEventListener('click', () => {
    resetGame();
});

function resetGame(){
    //reset variables
    rounds = 0;
    win = 0;
    loss = 0;

    //hide result and round result
    document.getElementsByClassName("round-result")[0].style.visibility = "hidden";
    finalResult.style.visibility = "hidden";

    //reset all the tile to black
    for(let i = 0; i < 5; i++)
    {
        tiles[i].style.backgroundColor = "black";
    }
    //hide reset button
    reset.style.visibility = "hidden";

    //change background color to white
    document.body.style.backgroundColor = "white";
}

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
        return ["It's a tie!", "tie", computerSelection];
    else if(playerSelection === 'rock' && computerSelection === 'paper')
        return ["You lose! Paper beats Rock!", "lose", computerSelection];
    else if(playerSelection === 'rock' && computerSelection === 'scissor')
        return ["You win! Rock beats Scissors!", "win", computerSelection];
    else if(playerSelection === 'paper' && computerSelection === 'rock')
        return ["You win! Paper beats Rock", "win", computerSelection];
    else if(playerSelection === 'paper' && computerSelection === 'paper')
        return ["It's a tie!", "tie", computerSelection];
    else if(playerSelection === 'paper' && computerSelection === 'scissor')
        return ["You lose! Scissors beats paper!","lose", computerSelection];
    else if(playerSelection === 'scissor' && computerSelection === 'rock')
        return ["You lose! Rock beats Scissors", "lose", computerSelection];
    else if(playerSelection === 'scissor' && computerSelection === 'paper')
        return ["You win! Scissors beats paper!","win", computerSelection];
    else if(playerSelection === 'scissor' && computerSelection === 'scissor')
        return ["It's a tie!","tie", computerSelection];
}
function game(playerChoice){
    //will only play 5 rounds, display result on the last round
    if(rounds < 5)
    {
        let result = playRound(playerChoice, computerPlay());
        //capitalize the first letter of computer and player choice
        //as well as the result
        let upperPlayer = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        let upperComp = result[2].charAt(0).toUpperCase() + result[2].slice(1);

        //update player and computer choice on div
        strPlayer.innerHTML = upperPlayer;
        strComp.innerHTML = upperComp;

        if(result[1] === "win")
        {
            strRound.innerHTML = "You won this round!";
            win++;
            tiles[rounds].style.backgroundColor = "green";
        }
        else if(result[1] === "lose")
        {
            strRound.innerHTML = "You lost this round!";
            loss++;
            tiles[rounds].style.backgroundColor = "red";
        }
        else{
            strRound.innerHTML = "It's a tie!";
            tiles[rounds].style.backgroundColor = "yellow";
        }

        //will make the round results visible on the first (0th) round
        if(rounds === 0)
            document.getElementsByClassName("round-result")[0].style.visibility = "visible";

        //increment the number of rounds currently played
        rounds++;

        //display results on last round
        if(rounds === 5)
        {
            if(win === loss)
            {
                finalResult.innerHTML = "It's a tie!";
                document.body.style.backgroundColor = "yellow";
            }
            else if(win > loss)
            {
                finalResult.innerHTML = "You won!";
                document.body.style.backgroundColor = "green";
            }
            else
            {
                finalResult.innerHTML = "You lost!";
                document.body.style.backgroundColor = "red";
            }

            finalResult.style.visibility = "visible";
            reset.style.visibility = "visible";
        }
    }
}