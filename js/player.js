
class Player extends Populate {
    constructor () {
      super();
      this.x = 0;
      this.y = 415;
      this.sprite = "images/char-boy.png";
      this.moveSpeed = 5
    }
      handleInput (input) {
      switch (input) {
        case "left":
          if (this.x >= this.moveSpeed) {
            this.x -= this.moveSpeed;
          }
          break;
        case "right":
          if (this.x <= this.moveSpeed * 3) {
            this.x += this.moveSpeed;
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
      update () {
      for (let enemy of allEnemies) {
          // enemy collision
        if (this.y === enemy.y && (enemy.x + enemy.sideways / 2 > this.x && enemy.x < this.x + this.sideways / 2)) {
          this.reset();
        }
        
      }
    }
  }
  