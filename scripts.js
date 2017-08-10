let playerOne = [];
let playerTwo = [];
let playTurn = 0;
let playerOneMoveCount = [];
let playerTwoMoveCount = [];
let circles = $('div.r1, div.r2, div.r3, div.r4, div.r5, div.r6, div.r7');

//clicking start button, will prompt for player names, and put them in their respective arrays

$('button#start').click(function(){
    getPlayerOneName();
    getPlayerTwoName();
});
function getPlayerOneName(){
    let nameInput = prompt('Enter first players name!');
    playerOne.push(nameInput)
}
function getPlayerTwoName(){
  let nameInput = prompt('Enter second players name!');
  playerTwo.push(nameInput)
}
// when a circle is clicked, a color is populated.
//need it to populate, appropriate player color


// function letThemPlay() {
//   $(circles).click(function() {
//     playerOneMoves();
//     playerTwoMoves();
//   })
// }
// letThemPlay();

function playerOneMoves() {
    let circles = $('div.r1, div.r2, div.r3, div.r4, div.r5, div.r6, div.r7');
        $(circles).click(function(){
            $(this).css('background-color', 'red');
            console.log('click')
        })
}
playerOneMoves();

function playerTwoMoves() {
  let circles = $('div.r1, div.r2, div.r3, div.r4, div.r5, div.r6, div.r7');
  $(circles).click(function(){
    $(this).css('background-color', 'blue');
    console.log('click')
  })
}
// playerTwoMoves();

//trying to make sure when a circle is clicked
//that the correct color is assigned and the correct
//player is recognized

// function currentPlayer(){
//     turnCount();
//     if (playTurn % 2 === 0){
//         currentPlayer.push(turnCount[i])
//     }   else {
//         currentPlayer.push(turnCount[i])
//     }
// }
//
function turnCount(){
  playTurn++;
}
//
//
//
//
// function playerMove() {
//   turnCount();
//   if (playTurn % 2 === 0){
//     clickAssign();
//   } else {
//     clickAssign()
//   }
//   if (playTurn > 42){
//     var conf = confirm('Cats Game, play again?');
//     if(conf){
//       resetBoard();
//     }
//   }
// }
//
// playerMove()

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
