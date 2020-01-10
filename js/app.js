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

function drawBoard() {
  let board = document.getElementById('board');
  let display = '';
  for (let i = 0; i < 9; i++) {
    display += `<div id =" ${i}" onclick="game(this);" class="box"></div>`;
  }
  board.innerHTML = display;
}
function giveName() {
  let player1 = document.getElementById('player-1');
  let player2 = document.getElementById('player-2');
  if (player1.value === '') {
    player[0] = 'Player1';
  } else {
    player[0] = player1.value;
  }

  if (player2.value === '') {
    player[1] = 'Player2';
  } else {
    player[1] = player2.value;
  }
  drawBoard();

  document.getElementById('board').classList.remove('hide');
  document.getElementById('buttons').classList.remove('hide');
  document.getElementById('form').classList.add('hide');
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

function game(clickBox) {
  clickBox.innerText = options[turn];

  if (winner !== true) {
    switchTurn();
  }
  clickBox.onclick = '';
  clickBox.addEventListener('click', null);
  document.getElementById('messages').innerText = player[turn] + "'s turn";
  board[clickBox.id] = options[turn];
  counter += 1;
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
      const elem = document.getElementsByClassName('box');
      for (let i = 0; i < elem.length; i += 1) {
        elem[i].onclick = '';
      }
    }
  });
  checkDraw();
}
function resetGame() {
  board = {};
  winner = false;
  document.getElementById('messages').innerText = '';
  drawBoard();
}
