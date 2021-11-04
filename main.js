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
let rule = document.querySelector("#rule");
let canvasMusic;
let overMusic;
//let addScore = document.querySelector("#points");

//FUNCTIONS
const backGroundMusic = () => {
  canvasMusic = new Audio("/music/y2mate.com - Carvalhesa PCP.mp3");
  canvasMusic.loop = true;
  canvasMusic.play();
};

const gameOverMusic = () => {
  overMusic = new Audio("/music/mixkit-game-over-trombone-1940.wav");
  canvasMusic.pause();
  overMusic.loop = true;
  overMusic.play();
};

// !ADD EVENTS LISTENERS

startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  canvas.style.display = "flex";
  score.style.display = "flex";
  rule.style.display = "flex";

  // initializeClock --> atual date + 5 minutes
  game = new Game();
  game.initializeClock();
  game.gameLoop(this.game);
  backGroundMusic();
});

document.addEventListener("keydown", (event) => {
  game.mao.MaoMovement(event);
});

killAgainButton.addEventListener("click", () => {
  startScreen.style.display = "flex";
  canvas.style.display = "none";
  score.style.display = "none";
  rule.style.display = "none";
  gameOver.style.display = "none";
});
