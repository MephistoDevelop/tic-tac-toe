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
let winner;
let options = ['X', 'O'];
let turn = 0;
let counter = 0;

function giveName() {
  player1 = document.getElementById('player-1');
  player2 = document.getElementById('player-2');
  if (player1.value == '') {
    player[0] = 'Player1';
  } else {
    player[0] = player1.value;
  }

  if (player2.value == '') {
    player[1] = 'Player2';
  } else {
    player[1] = player2.value;
  }
  scatchBoard();
  document.getElementById('board').classList.remove('hide');
  // document.getElementById("form").className="hide";
}

function drawBoard() {
  var board = document.getElementById('board');
  var display = '';
  for (var i = 0; i < 9; i++) {
    display += '<div id ="' + i + '" onclick="game(this);" class="box"></div>';
  }
  board.innerHTML = display;
}

function game(clickBox) {
  clickBox.innerText = options[turn];
  board[clickBox.id] = options[turn];
  switchTurn();

  if (winner != true) {
    switchTurn();
  }
  clickBox.onclick = '';
  clickBox.addEventListener('click', null);
  document.getElementById('messages').innerText = player[turn] + "'s turn";
  console.log(board);

  counter++;
  winning(board, options[turn]);
}

function refresh() {
  location.reload();
}

function winning(board, sign) {
  win.forEach(function(element) {
    if (
      board[element[0] - 1] === sign &&
      board[element[1] - 1] === sign &&
      board[element[2] - 1] === sign
    ) {
      document.getElementById('messages').innerText = player[turn] + "'s win";

      winner = true;
      elem = document.getElementsByClassName('box');
      for (let i = 0; i < elem.length; i++) {
        elem[i].onclick = '';
      }
    }
  });
  checkDraw();
}
function resetGame() {
  board = {};

  let boxes = document.getElementById('board');
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }

  turn = 0;
  counter = 0;
  winner = false;
  document.getElementById('messages').innerText = player[turn] + "'s turn";

  drawBoard();
}
function switchTurn() {
  if (turn === 0) turn = 1;
  else turn = 0;
}

function checkDraw() {
  if (counter === 9 && winner === false) {
    document.getElementById('messages').innerText = 'Draw Game';
    winner = false;
  }
}
