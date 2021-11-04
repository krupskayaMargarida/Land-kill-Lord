class Mao {
  constructor() {
    this.Maoimg = new Image();
    this.Maoimg.src = "../images/mao.png";
    this.width = 60;
    this.height = 60;
    this.MaoX = canvas.width / 50;
    this.MaoY = canvas.height / 1.2;
    this.score = 0;
  }

  //Methods

  drawMao = () => {
    ctx.drawImage(this.Maoimg, this.MaoX, this.MaoY, this.width, this.height);
  };

  MaoMovement = (event) => {
    if (event.code === "ArrowRight") {
      this.MaoX = this.MaoX + 20;
    } else if (event.code === "ArrowLeft") {
      this.MaoX = this.MaoX - 20;
    }
  };

  checkCollision = (eachLandlord, index, array) => {
    if (
      this.MaoX < eachLandlord.landlordX + eachLandlord.width &&
      this.MaoX + this.width > eachLandlord.landlordX &&
      this.MaoY < eachLandlord.landlordY + eachLandlord.height &&
      this.MaoY + this.height > eachLandlord.landlordY
    ) {
      array.splice(index, 1);
      // Get span HTML element with id points -- the score element
      let addScore = document.querySelector("#points");
      // Convert to number, since is a string -- or use parseInt method
      let currentScore = Number(addScore.innerHTML);
      addScore.innerHTML = currentScore + 1;
      this.score = currentScore;
    }
  };

  getScore = () => {
    return this.score;
  };
}
