
class Player extends Populate {
    constructor () {
      super();
      this.score=0;
      this.startx = gameSetting.tileH*5;
      this.starty = (gameSetting.tileH)*9;
      this.x = this.startx
      this.y = this.starty
      this.width = 40;
      this.height = 80
      this.sprite = "images/char-boy.png";
      this.moveSpeed = 5
      this.destination = {x:this.x,y:this.y}
    }
      handleInput (input) {
      switch (input) {
        case "left":
          if (this.destination.x >= gameSetting.tileW) {
            this.destination.x -= gameSetting.tileW;
          }
          break;
        case "right":
          if (this.destination.x <= gameSetting.tileW * 10-3) {
            this.destination.x += gameSetting.tileW;
          }
          break;
        case "up":
          if (this.destination.y >= 0) {
            this.destination.y -= gameSetting.tileH;
          }
          break;
        case "down":
          if (this.destination.y <= gameSetting.tileH * 12-3) {
            this.destination.y += gameSetting.tileH;
          }
          break;
      }
    }
      update () {
          this.y-=(this.y - this.destination.y)/5

          this.x-=(this.x - this.destination.x)/5



          for (let enemy of allGems) {  
          if (this.destination.y > enemy.y-30
              && this.destination.y < enemy.y+30
               && (enemy.x + enemy.sideways / 2 > this.x 
                  && enemy.x < this.x)) {
                      this.score++
                      let s=document.getElementById('scores')
                      s.innerHTML="score: "+this.score
                      enemy.reposition()
          }
          
        }



          for (let enemy of allEnemies) {

          // enemy collision

        if (this.destination.y > enemy.y-30
            && this.destination.y < enemy.y+30
             && (enemy.x + enemy.sideways / 2 > this.x 
                && enemy.x < this.x)) {
                    this.destination.x=this.startx

                    this.destination.y=this.starty
                    this.x=this.startx

                    this.y=this.starty
        }
        
      }
    }
  }
  