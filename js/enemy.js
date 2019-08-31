const allEnemies = [];

class Enemy extends Populate {
  constructor (x, y, speed) {
    super();
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = "images/enemy-bug.png";
    this.enemySprite = this.sprite;
  }

  //Smooth movement of Enemy objects across gameboard
  update (dt) {
    if (this.x < this.sideways * 5) {
      this.x += this.speed * dt;
    } else {
      this.x = -100;
    }
  }
}

const enemy1 = new Enemy(101, 83, 150);
const enemy2 = new Enemy(404, 166, 350);
const enemy3 = new Enemy(0, 249, 375);
const enemy4 = new Enemy(0, 83, 100);

allEnemies.push(enemy1, enemy2, enemy3, enemy4);
