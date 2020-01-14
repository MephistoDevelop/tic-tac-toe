let board = {};
let player = [];
player[0] = 'Player1';
player[1] = 'Player2';
const win = [
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
const options = ['X', 'O'];
let turn = 0;
let counter = 0;

class Player {
    static giveName() {
        const player1 = document.getElementById('player-1');
        const player2 = document.getElementById('player-2');
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
        Board.drawBoard();
      
        document.getElementById('board').classList.remove('hide');
        document.getElementById('buttons').classList.remove('hide');
        document.getElementById('form').classList.add('hide');
    }

    static switchTurn() {
        if (turn === 0) turn = 1;
        else turn = 0;
    }
}


class Board {

    static checkDraw() {
        if (counter === 9 && winner === false) {
          document.getElementById('messages').innerText = 'Draw Game';
          winner = false;
          alert('Draw Game !!');
          Game.resetGame();
        }
    }
 
    static drawBoard() {
        const Board = document.getElementById('board');
        let display = '';
        for (let i = 1; i < 10; i += 1) {
          display += `<div id ="${i}" onclick="game(this);" class="box"></div>`;
        }
        Board.innerHTML = display;
    }

    static winning(Board, sign) {
        const win = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
        ];

        win.forEach(function(element) {
          if (
            board[element[0]] === sign &&
            board[element[1]] === sign &&
            board[element[2]] === sign
          ) {
            winner = true;
            const elem = document.getElementsByClassName('box');
            for (let i = 0; i < elem.length; i += 1) {
              elem[i].onclick = '';
            }
            alert(`Player ${player[turn]} Wins !!`);
            Game.resetGame();
          } else {
            winner = false;
    
          }
        });

        if (counter === 9 && winner === false) {
            document.getElementById('messages').innerText = 'Draw Game';
            winner = false;
            alert('Draw Game !!');
            Game.resetGame();
          }
    }


     
}

class Game {
    static resetGame() {
        board = {};
        winner = false;
        counter = 0;
        turn = 1;
        Board.drawBoard();
    }
}


function game(clickBox) {
    clickBox.innerText = options[turn];
    clickBox.onclick = '';
    clickBox.addEventListener('click', null);
  
    board[clickBox.id] = options[turn];
    counter += 1;
    Board.winning(board, options[turn]);
    if (winner !== true) {
      Player.switchTurn();
    }
    document.getElementById('messages').innerText = player[turn] + "'s turn";
} 

function refresh() {
    location.reload();
}



document.getElementById('btn-play').addEventListener('click', function(){
    Player.giveName();
})
document.getElementById('button1').addEventListener('click', function(){
    Game.resetGame();
});
document.getElementById('button2').addEventListener('click', refresh);
document.getElementById('body').addEventListener('load', function(){
    Game.resetGame();
});

