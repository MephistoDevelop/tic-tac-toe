//basic variables
let board = {};
let player = [];
player[0] = 'Player1';
player[1] = 'Player2';
let win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let options = ['X', 'O'];
let turn = 0;

drawBoard();

function drawBoard(){
  var board = document.getElementById("board");
  var display = "";
  for (var i=0; i < 9; i++) {
    display += '<div id ="'+i+'" onclick="game(this);" class="box"></div>';
}
board.innerHTML = display;

}
function game(clickBox) {
  clickBox.innerText = options[turn];
  switchTurn();

  clickBox.onclick = '';
  document.getElementById('messages').innerText = player[turn] + "'s turn";
  board[clickBox.id] = options[turn];
  winning(board, options[turn]);
}

function winning(board, sign) {
  win.forEach(function(element) {
    if (
      board[element[0] - 1] === sign &&
      board[element[1] - 1] === sign &&
      board[element[2] - 1] === sign
    ) {
      alert(`Player ${sign} Wins !! - ${element}`);
      resetGame();
    }
    // console.log(element);
  });
}
function resetGame() {
  board = {};
  let boxs = document.getElementsByClassName('box');
  for (let i = 0; i < boxs.length - 1; i++) {
    boxs[i].innerText = '';
    boxs[i].addEventListener('click', function() {
      game(this);
    });
    turn = 0;
    document.getElementById('messages').innerText = player[turn] + "'s turn";
  }
}
function switchTurn() {
  if (turn == 0) turn = 1;
  else turn = 0;
}
