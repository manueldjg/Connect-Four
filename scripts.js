let playerOne = {playTurnId: 1};
let playerTwo = {playTurnId: 2};
let currentPlayer;
let playTurn = 0;
let oneTurn = 0;
let twoTurn = 0;
let playerOneCircles = $();
let playerTwoCircles = $();
let redDisc = playerOneCircles;
let blueDisc = playerTwoCircles;
let circles = $('div.r1, div.r2, div.r3, div.r4, div.r5, div.r6, div.r7');
let winningCombinations = $('div.r1.c1, div.r1.c2, div.r1.c3, div.r1.c4');

//clicking start button, will prompt for player names, and put them in their respective arrays

// noinspection JSAnnotator
$('button').click(function(){
  console.log('click');
  $('p').show(2000);
})


$('button#start').click(function(){
    getPlayerOneName();
    getPlayerTwoName();
    currentPlayer = playerOne;
    startGame();
});

function getPlayerOneName(){
    let nameInput = prompt('Enter first players name!');
    playerOne.name = nameInput;
}
function getPlayerTwoName(){
  let nameInput = prompt('Enter second players name!');
  playerTwo.name = nameInput;
}

function clickAssign(){
    $(circles).click(playerClickCell)
}


// when a circle is clicked, a color is populated.
//need it to populate, appropriate player color

function playerClickCell(){
    turnCount();
    playerOneTurnCount();
  if (currentPlayer.playTurnId === 1) {
    $(this).css('background-color', 'red');
    playerOneCircles.push(this);
    checkForVictory();
    currentPlayer = playerTwo
  } else {
    playerTwoTurnCount();
    $(this).css('background-color', 'blue');
    playerTwoCircles.push(this);
    currentPlayer = playerOne
  }
  if (playTurn >= 42){
      let conf = confirm(`It's a draw, play again?`);
      if(conf){
          resetBoard();
      }
  }
}

function turnCount(){
    playTurn++;
}

function playerOneTurnCount(){
    oneTurn++;
}
function playerTwoTurnCount(){
    twoTurn++;
}

// function checkForVictory(){
//     if(redDisc === winningCombinations);
//     console.log('u win')
// }

function startGame(){
  clickAssign();

}

function resetBoard(){
  startGame();
}
















// $('div.r1.c1, div.r2.c1').click(function(){
//     $(this).css('background-color','red');
// });

//IMPORTANT!

// $('div.r1').click(function(){
//   $(this).css('background-color','red');
// });

// $('div.r2.c1').click(function(){
//   $(this).css('background-color','blue');
// });


// $('div.r1.c1').click()
