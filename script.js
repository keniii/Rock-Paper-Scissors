const computerSelection = '';
const playerSelection = '';
let playerScore = 0;
let compScore = 0; 

function computerPlay() {
    // This function randomizes an array of rock paper and scissors 
    const compChoices = ["rock", "paper", "scissors"] 
    let compAnswer = Math.floor(Math.random() * compChoices.length)
    if (compAnswer === 0) {
        return ("rock");
    }
    else if (compAnswer === 1){
        return ("paper");
    }
    else {
        return ("scissors");
    };
    
}

function playRound(playerSelection, computerSelection) {
    //Shows scoreboard before round starts
    let scoreBoard = (playerScore + '-' + compScore);
    console.log(scoreBoard);
    playerSelection = window.prompt("Please choose between Rock, Papers, and Scissors.").toLowerCase();
    computerSelection = computerPlay();
        if (playerSelection === computerSelection) { 
            return 'You tied with the computer';
        }   else if (playerSelection == 'rock' && computerSelection == 'paper') {
            compScore++
            return 'You lost! The computer chose paper and you chose rock.';
        }   else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore++
            return 'You won! The computer chose scissors and you chose rock.';
        }   else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            compScore++
            return 'You lost! The computer chose scissors and you chose paper.';
        }   else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore++
            return 'You won! The computer chose rock and you chose paper.';
        }   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore++
            return 'You won!. The computer chose paper and you chose scissors.';
        }   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            compScore++
            return 'You lost! The computer chose rock and you chose scissors.'; 
        }   else {
            return ('Please select "rock", "paper", or "scissors');;
            }
        }     

//This function loops for 5 rounds 
function game() {
    for (let i = 0; i <= 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore  > compScore) {
        console.log('You are the winner!');
    }
    else if (compScore > playerScore) {
        console.log('Dang, you suck. The computer won');
    }
    else if (compScore == playerScore) {
        console.log('It\'s a tie!');
    }
}

game();

