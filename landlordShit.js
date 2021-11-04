class Landlord {
  constructor(srcImage) {
    this.landlordimg = new Image();
    this.landlordimg.src = srcImage;
    this.width = 40;
    this.height = 40;
    this.landlordX = Math.floor(Math.random() * canvas.width);
    this.landlordY = 10;
  }

  //methods

  drawLandlord = () => {
    ctx.drawImage(
      this.landlordimg,
      this.landlordX,
      this.landlordY,
      this.width,
      this.height
    );
  };

  landlordMove = (yVelocity) => {
    this.landlordY += yVelocity;
  };
}
