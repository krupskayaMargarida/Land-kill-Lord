// GLOBAL VARIABLES
let game;
const gameHappening = true;

//CANVAS SETUP
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

//DOM ELEMENTS

let startButton = document.querySelector("#start-btn");
let killAgainButton = document.querySelector("#restart-btn");
let startScreen = document.querySelector("#BEGGINING");
let gameOver = document.querySelector("#game-over");
let clock = document.querySelector("#clockdiv");
//let addScore = document.querySelector("#points");

//FUNCTIONS

// !ADD EVENTS LISTENERS

startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  canvas.style.display = "flex";
  score.style.display = "flex";
  // initializeClock --> atual date + 5 minutes
  game = new Game();
  game.initializeClock();
  game.gameLoop(this.game);
});

document.addEventListener("keydown", (event) => {
  game.mao.MaoMovement(event);
});
