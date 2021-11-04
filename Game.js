class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "./images/background.png";
    this.mao = new Mao();
    //this.landlord = new landlord(); //
    this.landlordArr = [new Landlord("./images/landlordbk.png")];
    this.gameHappening = true;
    this.currentMinute = 3;
  }

  //methods
  //! how to add more landlords and how!

  //! last element of array

  getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    return {
      total,
      minutes,
      seconds,
    };
  }

  initializeClock() {
    let endtime = this.addMinutes(3);
    const timeinterval = setInterval(() => {
      const t = this.getTimeRemaining(endtime);
      this.currentMinute = t.minutes;
      clock.innerHTML = t.minutes + ":" + t.seconds;
      if (t.total <= 0) {
        if (this.mao.getScore() < 100) {
          // TODO -> GAME OVER
          console.log("GAME OVER");
        } else {
          // TODO -> DONE
          console.log("YOU DID IT");
        }
        this.resetGame();
        clearInterval(timeinterval);
      }
    }, 1000);
  }

  // Return the current date plus x minutes
  addMinutes(minutes) {
    let currentDate = new Date();
    return new Date(currentDate.getTime() + minutes * 60000);
  }

  addlandies = () => {
    let lastIndex = this.landlordArr.length - 1;
    let lastLandlord = this.landlordArr[lastIndex];
    if (lastLandlord.landlordY > 200) {
      this.landlordArr.push(new Landlord("./images/landlordbk.png"));
    }
  };

  gameLoop = () => {
    //1. clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //2. changes in elements and movements
    //this.landlord.landlordMove(); //
    this.landlordArr.forEach((eachLandlord) => {
      if (this.currentMinute === 3 || this.currentMinute === 2) {
        eachLandlord.landlordMove(2);
      } else if (this.currentMinute === 1) {
        eachLandlord.landlordMove(4);
      } else if (this.currentMinute === 0) {
        eachLandlord.landlordMove(6);
      }
    });
    this.addlandies();
    this.landlordArr.forEach((eachLandlord, index, array) => {
      this.mao.checkCollision(eachLandlord, index, array);
    });

    //3. drawing elements
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
    this.mao.drawMao();
    //this.landlord.drawLandlord();//
    this.landlordArr.forEach((eachLandlord) => {
      eachLandlord.drawLandlord();
    });

    //4. animation frame and logic game

    if (this.gameHappening) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  resetGame = () => {
    this.gameHappening = false;
  };
}

//! PROF - document.addEventListener ("Load", function () {
//  startGame()
