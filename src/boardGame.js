const boardGame = (() =>{
   

  const drawBoard = () => {
    const Board = document.getElementById('board');
    let display = '';
    for (let i = 1; i < 10; i += 1) {
      display += `<div id ="${i}"  class="box game${i}"></div>`;
    }

    Board.innerHTML = display;

    var boxs = document.getElementsByClassName('box');
    for (let i = 0; i < boxs.length; i += 1) {
      boxs[i].addEventListener('click', function() {
        game(this);
      });
    }
  }

  return {
      drawBoard,
  };
}) ();


export default boardGame;