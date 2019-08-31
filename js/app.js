//Parent object for sprites
gameSetting={
  tileW:50,
  tileH:40,
 }


const player = new Player();

document.addEventListener("keyup", function (e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
