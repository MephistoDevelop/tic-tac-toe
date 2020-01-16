import gamePlay from './gamePlay'

document.getElementById('btn-play').addEventListener('click', function(){
  gamePlay.giveName();
})
document.getElementById('button1').addEventListener('click', function(){
  gamePlay.resetGame();
});
document.getElementById('button2').addEventListener('click', function(){
  gamePlay.refresh();
});
document.getElementById('body').addEventListener('load', function(){
  gamePlay.resetGame();
});
