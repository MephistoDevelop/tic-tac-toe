import boardGame from './boardGame'
const  gamePlay = (() =>{
    let board
    let turn
    let winner
    let options = ["X", "O"]
    let counter
    let player
    const giveName = () => {
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
  
        boardGame.drawBoard();
      
        document.getElementById('board').classList.remove('hide');
        document.getElementById('buttons').classList.remove('hide');
        document.getElementById('form').classList.add('hide');
    }
      const switchTurn = () => {
        if (turn === 0) turn = 1;
        else turn = 0;
    }
    const playGame = (clickBox) => {
        clickBox.innerText = options[turn];
        clickBox.onclick = '';
        clickBox.addEventListener('click', null);
      
        board[clickBox.id] = options[turn];
        counter += 1;
        Board.winning(board, options[turn]);
        if (winner !== true) {
          switchTurn();
        }
        document.getElementById('messages').innerText = player[turn] + "'s turn";
    }

    const winning = (Board,sign) => {
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
            document.getElementById('messages').classList.add('hide');
            document.getElementById('win-msg').innerText = player[turn] + " is winner!!!"
          } else {
            winner = false;
    
          }
        });

        if (counter === 9 && winner === false) {
            document.getElementById('messages').classList.add('hide');
            winner = false;
            document.getElementById('win-msg').innerText = 'Draw Game';
        }
    }

    const resetGame =() => {
        board = {};
        winner = false;
        counter = 0;
        turn = 0;
        boardGame.drawBoard();
        document.getElementById('messages').innerText = player[turn] + "'s turn";
        document.getElementById('messages').classList.remove('hide');
        document.getElementById('win-msg').innerText = '';
    }

    const refresh = () => {
        location.reload();
    }

    return {
        resetGame,
        refresh,
        winning,
        playGame,
        switchTurn,
        giveName,
    }
})

export default gamePlay;