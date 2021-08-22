let pScore = 0;
let cScore = 0; 
let playerScore  = document.querySelector('#playerScore');
let compScore = document.querySelector('#computerScore')
const result = document.querySelector('#result');
// const score  = document.querySelector('#score');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

function computerPlay() {
    // This function randomizes an array of rock paper and scissors 
    const compChoices = ["rock", "paper", "scissors"] 
    let compAnswer = Math.floor(Math.random() * compChoices.length)
    if (compAnswer === 0) {
        return ('rock');
    }
    else if (compAnswer === 1){
        return ('paper');
    }
    else {
        return ('scissors');
    };
    
}
//Button Event listeners 
rockBtn.addEventListener('click', (e) => {
    playRound('rock', computerPlay());
    e.target;
})


paperBtn.addEventListener('click', (e) => {
    playRound('paper', computerPlay());
    e.target;
})

scissorsBtn.addEventListener('click', (e) => {
    playRound('scissors', computerPlay());
    e.target;
}) 


//Plays round of game
function playRound(playerSelection,computerSelection) {
    computerSelection = (computerPlay());
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            result.textContent = ('It\'s a tie!')
        }
        else if (computerSelection === 'paper') {
            result.textContent = ('You lost this round!')
            cScore++;
            updateScore()
        }
        else if (computerSelection === 'scissors') {
            result.textContent = ('You won this round!')
           pScore++;
           updateScore()
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result.textContent = ('You won this round!')
           pScore++;
           updateScore()
        }
        else if (computerSelection === 'paper') {
            result.textContent = ('It\'s a tie!')
        }
        else if (computerSelection === 'scissors') {
            result.textContent = ('You lost this round!');
            cScore++;
            updateScore()
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            result.textContent = ('You lost this round!')
           cScore++;
           updateScore()
        }
        else if (computerSelection === 'paper') {
            result.textContent = ('You won this round!');
            pScore++;
            updateScore()
        }
        else if (computerSelection === 'scissors') {
            result.textContent = ('It\'s a tie!')
        }
    } checkWinner();    
}

function updateScore() {
    const playerScore  = document.querySelector('#playerScore');
    const compScore = document.querySelector('#computerScore');
    playerScore.textContent = pScore;
    compScore.textContent = cScore;
}


function checkWinner() {
    if (pScore >= 5 ) {
        alert('Nice bro, you won!');
        restartGame();
    }else if (cScore >= 5 ) {
        alert('Wow...You really lost against a computer');
        restartGame();
    }
}

function restartGame() {
    pScore = 0;
    cScore = 0;
    playerScore.textContent = pScore;
    compScore.textContent = cScore;
    // score.textContent = (playerScore + '-' + compScore);
}

window.onload = restartGame();
