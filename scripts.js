let playerOne = {playTurnId: 1};
let playerTwo = {playTurnId: 2};
let currentPlayer;
let playerOneMoveCount = [];
let playerTwoMoveCount = [];
let circles = $('div.r1, div.r2, div.r3, div.r4, div.r5, div.r6, div.r7');

//clicking start button, will prompt for player names, and put them in their respective arrays

$('button#start').click(function(){
    getPlayerOneName();
    getPlayerTwoName();
    currentPlayer = playerOne;
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
    console.log(this)
  if (currentPlayer.playTurnId === 1) {
    $(this).css('background-color', 'red')
    currentPlayer = playerTwo
  } else {
    $(this).css('background-color', 'blue')
    currentPlayer = playerOne
  }
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

// function starNewGame(){
//
//
// }
