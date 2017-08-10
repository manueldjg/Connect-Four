let playerOne;
let playerTwo;
let playerTurn = 0;
let PLayerOneMoves = [];
let playerTwMoves = [];
let circles = document.getElementsByClassName('c1');

function clickAssign() {
    let circles = document.getElementsByClassName('c1');
    for (let i = 0; i < circles.length; i++) {
        circles[i].addEventListener('click', prompt);
        console.log('clicked!')
    }
}

clickAssign()
function currentPlayer() {
    turnCount();
    if (playTurn % 2 === 0){
        currentPlayer.push(turnCount[i])
    } else {
        currentPlayer.push(turnCount[i])
    }
}
function playerMove() {
    turnCount();
    if (playTurn % 2 === 0){
        this.style.backgroundColor = red;
        playerXMoves.push(parseInt(this.id));
        this.removeEventListener('click', playerMove);
        checkForWin(playerXMoves);
    } else {
        this.style.backgroundColor = blue;
        playerOMoves.push(parseInt(this.id));
        this.removeEventListener('click', playerMove);
        checkForWin(playerOMoves)
    }
    if (playTurn >= 42){
        var conf = confirm('Cats Game, play again?');
        if(conf){
            resetBoard();
        }
    }
}


function turnCount () {
    playTurn++;
}
function startANewGame() {
    clickAssign();
};

startANewGame();
