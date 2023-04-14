const rockButtonElement = document.getElementById("rockButton-id");
const paperButtonElement = document.getElementById("paperButton-id");
const scissorsButtonElement = document.getElementById("scissorsButton-id");
const resultElement = document.getElementById("resultParagraph-id");
const yourMoveElement = document.getElementById("yourMoveParagraph-id");
const computerMoveElement = document.getElementById("computerMoveParagraph-id");
const resultHistoryElement = document.getElementById("resultHistoryParagraph");
const resetScoreElement = document.getElementById("resetScoreButton-id");
const allTimeScoreElement = document.getElementById("allTimeScoresParagraph-id");

let score = {
    wins: 0,
    losses: 0,
    ties: 0
}

let allTimeScore = JSON.parse(localStorage.getItem('allTimeScore')) ||  {
         allTimeWins: 0,
         allTimeLosses: 0,
         allTimeTies: 0
    }



function computerMoveDecider(){
    let computerMove = Math.floor(Math.random() * 3 + 1);
    if(computerMove === 1){
        computerMoveFinal = 'rock';
    } else if(computerMove === 2){
        computerMoveFinal = 'paper';
    } else if (computerMove === 3){
        computerMoveFinal = 'scissors';
    }
}


function playerMoveDecider(value){
    if(value === 'rock'){
        if(computerMoveFinal === 'rock'){
            resultElement.innerText = `It's tied!`;
            yourMoveElement.innerHTML = `You chose <img src="images/${value}-emoji.png" alt="rock emoji picture" class="move-image-icon">`
            computerMoveElement.innerHTML = `Computer chose <img src="images/${computerMoveFinal}-emoji.png" alt="rock emoji picture" class="move-image-icon">`;
            score.ties+=1;
            allTimeScore.allTimeTies+=1;
            resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        }else if (computerMoveFinal === 'paper'){
            resultElement.innerText = `Computer Won!`;
            yourMoveElement.innerHTML = `You chose <img src="images/${value}-emoji.png" alt="rock emoji picture" class="move-image-icon">`
            computerMoveElement.innerHTML = `Computer chose <img src="images/${computerMoveFinal}-emoji.png" alt="rock emoji picture" class="move-image-icon">`;
            score.losses+=1;
            allTimeScore.allTimeLosses+=1;
            resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        } else if (computerMoveFinal === 'scissors'){
            resultElement.innerText = `You won!`;
            yourMoveElement.innerHTML = `You chose <img src="images/${value}-emoji.png" alt="rock emoji picture" class="move-image-icon">`
            computerMoveElement.innerHTML = `Computer chose <img src="images/${computerMoveFinal}-emoji.png" alt="rock emoji picture" class="move-image-icon">`;
            score.wins+=1;
            allTimeScore.allTimeWins+=1;
            resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        }
    } else if(value === 'paper'){
        if(computerMoveFinal === 'rock'){
            resultElement.innerText = `You won!`;
            yourMoveElement.innerHTML = `You chose <img src="images/${value}-emoji.png" alt="rock emoji picture" class="move-image-icon">`
            computerMoveElement.innerHTML = `Computer chose <img src="images/${computerMoveFinal}-emoji.png" alt="rock emoji picture" class="move-image-icon">`;
            score.wins+=1;
            allTimeScore.allTimeWins+=1;
            resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        }else if (computerMoveFinal === 'paper'){
            resultElement.innerText = `It's tied!`;
            yourMoveElement.innerHTML = `You chose <img src="images/${value}-emoji.png" alt="rock emoji picture" class="move-image-icon">`
            computerMoveElement.innerHTML = `Computer chose <img src="images/${computerMoveFinal}-emoji.png" alt="rock emoji picture" class="move-image-icon">`;
            score.ties+=1;
            allTimeScore.allTimeTies+=1;
            resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        } else if (computerMoveFinal === 'scissors'){
            resultElement.innerText = `Computer won!`;
            yourMoveElement.innerHTML = `You chose <img src="images/${value}-emoji.png" alt="rock emoji picture" class="move-image-icon">`
            computerMoveElement.innerHTML = `Computer chose <img src="images/${computerMoveFinal}-emoji.png" alt="rock emoji picture" class="move-image-icon">`;
            score.losses+=1;
            allTimeScore.allTimeLosses+=1;
            resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        }
    } else if(value === 'scissors'){
        if(computerMoveFinal === 'rock'){
            resultElement.innerText = `Computer won!`;
            yourMoveElement.innerHTML = `You chose <img src="images/${value}-emoji.png" alt="rock emoji picture" class="move-image-icon">`
            computerMoveElement.innerHTML = `Computer chose <img src="images/${computerMoveFinal}-emoji.png" alt="rock emoji picture" class="move-image-icon">`;
            score.losses+=1;
            allTimeScore.allTimeLosses+=1;
            resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        }else if (computerMoveFinal === 'paper'){
            resultElement.innerText = `You won!`;
            yourMoveElement.innerHTML = `You chose <img src="images/${value}-emoji.png" alt="rock emoji picture" class="move-image-icon">`
            computerMoveElement.innerHTML = `Computer chose <img src="images/${computerMoveFinal}-emoji.png" alt="rock emoji picture" class="move-image-icon">`;
            score.wins+=1;
            allTimeScore.allTimeWins+=1;
            resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        } else if (computerMoveFinal === 'scissors'){
            resultElement.innerText = `It's tied!`;
            yourMoveElement.innerHTML = `You chose <img src="images/${value}-emoji.png" alt="rock emoji picture" class="move-image-icon">`
            computerMoveElement.innerHTML = `Computer chose <img src="images/${computerMoveFinal}-emoji.png" alt="rock emoji picture" class="move-image-icon">`;
            score.ties+=1;
            allTimeScore.allTimeTies+=1;
            resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        }
    }


    allTimeScoreElement.innerHTML = `All time Wins: ${allTimeScore.allTimeWins} All time Losses: ${allTimeScore.allTimeLosses} All time Ties: ${allTimeScore.allTimeTies}`;

    let sendJSON = localStorage.setItem('allTimeScore', JSON.stringify(allTimeScore)); // OVDE SALJEM JSON FAJL U LOCAL STORAGE
}


rockButtonElement.addEventListener('click', () => {
    computerMoveDecider();
    playerMoveDecider('rock');
});

paperButtonElement.addEventListener('click', () => {
    computerMoveDecider();
    playerMoveDecider('paper');
});

scissorsButtonElement.addEventListener('click', () => {
    computerMoveDecider();
    playerMoveDecider('scissors');
});

resetScoreElement.onclick = function (){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    resultHistoryElement.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    resultElement.innerText = ``;
    yourMoveElement.innerText = ``;
    computerMoveElement.innerText = ``;
}




computerMoveDecider();
playerMoveDecider();




