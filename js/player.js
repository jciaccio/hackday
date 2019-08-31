

//Player class
class Player extends Populate {
    constructor () {
      super();
      this.x = 0;
      this.y = 415;
      this.sprite = "images/char-boy.png";
    }
  
  //key input for Player
    handleInput (input) {
      switch (input) {
        case "left":
          if (this.x >= this.sideways) {
            this.x -= this.sideways;
          }
          break;
        case "right":
          if (this.x <= this.sideways * 3) {
            this.x += this.sideways;
          }
          break;
        case "up":
          if (this.y >= 83) {
            this.y -= this.upDown;
          }
          break;
        case "down":
          if (this.y <= this.upDown * 4) {
            this.y += this.upDown;
          }
          break;
      }
    }
  
    //updates player and sets condition for collision & win
    update () {
      for (let enemy of allEnemies) {
        if (this.y === enemy.y && (enemy.x + enemy.sideways / 2 > this.x && enemy.x < this.x + this.sideways / 2)) {
          this.reset();
        }
      }
    }
  }
  