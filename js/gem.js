const allGems = [];

class Gem extends Populate {
    constructor(x, y, speed) {
        super();
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.speed = speed;
        this.sprite = "images/Gem-Blue.png";
        this.gemSprite = this.sprite;
        this.c = 0
    }

    //Smooth movement of Enemy objects across gameboard
    reposition(){
        this.x = Math.floor(Math.random() * Math.floor(604));
                this.y = Math.floor(Math.random() * Math.floor(300));
    }
    update(dt) {
        this.c++
            if (this.c > 300) {
                this.reposition()
                //rand 1-10 * settings.tilew
                this.c = 0
            }
        if (this.x < this.sideways * 5) {
            this.x += this.speed * dt;
        } else {
            this.x = -100;
        }
    }
}

const gem1 = new Gem(50, 100, 0);
// const enemy2 = new Enemy(404, 166, 350);
// const enemy3 = new Enemy(0, 249, 375);
// const enemy4 = new Enemy(0, 83, 100);

allGems.push(gem1);