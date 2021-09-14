const controller = new AbortController();
const body = document.getElementsByTagName("body")[0];
const ball = document.getElementsByClassName("ball")[0];
const game = document.getElementsByClassName("game-container")[0];
let inGame = false;

function moveBall (event) {
  console.log("this is a ball move funcion!");
}

function setInGameFalse (event) {
  if (inGame){
    inGame = false;
    console.log(inGame, "ball");
    ball.abort();
  }
}

function setInGameTrue(event){
  if (!inGame) {
    inGame = true;
    console.log(inGame, "newBall");
    game.addEventListener("keypress", moveBall);
  }
}

console.log(inGame);
game.addEventListener("click", setInGameTrue);
