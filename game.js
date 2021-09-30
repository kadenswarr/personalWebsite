const controller = new AbortController();
const body = document.getElementsByTagName("body")[0];
const ball = document.getElementsByClassName("ball")[0];
const game = document.getElementsByClassName("game-container")[0];
let inGame = false;
let position = ball.getBoundingClientRect();
let x = position.left;
let y = position.top;


function moveBall (event) {


  if (event.keyCode === 37){
    ball.style.top = (--x + "px");
    console.log("ball left");
  } else if (event.keyCode === 38) {
    ball.style.top = (++y + "px");
    console.log("ball up");
  } else if (event.keyCode === 40) {
    ball.style.top = (--y + "px");
    console.log(y);
    console.log("ball down");
  } else if (event.keyCode === 39) {
    ball.style.top = (++x + "px");
    console.log("ball right");
  }
}

function moveY (event) {
  let y = parseInt(getComputedStyle(ball).top);

  if (event.keyCode === 38) {
    console.log("ball up");
  } else if (event.keyCode === 40) {
    let newY = --y
    ball.style.top = (newY + "px");
    console.log("ball down");
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
    body.addEventListener("keypress", moveBall);
  }
}

console.log(inGame);
// game.addEventListener("click", setInGameTrue);
// body.addEventListener("keydown", moveBall);
