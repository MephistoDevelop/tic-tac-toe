//basic variables
let board;
let player = [];
player[0] = "Player1";
player[1] = "Player2";
let options = ["X", "O"];
let turn = 0;

function game(clickBox) {
  clickBox.innerText = options[turn];
  switchTurn();

  clickBox.onclick = "";
  document.getElementById("messages").innerText = player[turn] + "'s turn"

}

function switchTurn() {
  if(turn == 0) turn = 1;
  else turn = 0;




}
