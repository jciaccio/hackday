gameSetting = {
  tileW: 50,
  tileH: 80,
}


var Engine = (function(global) {
  var doc = global.document,
      win = global.window,
      canvas = doc.createElement("canvas"),
      ctx = canvas.getContext("2d"),
      lastTime;

      canvas.width = 10*gameSetting.tileW;
      canvas.height = 12*gameSetting.tileH/2;
  doc.body.appendChild(canvas);

  /* This function serves as the kickoff point for the game loop itself
   * and handles properly calling the update and render methods.
   */
  function main() {
      var now = Date.now(),
          dt = (now - lastTime) / 1000.0;
      update(dt);
      render();
      lastTime = now;
      if (player.winAStar === true) {
          modal.style.display = "block";
          win.cancelAnimationFrame;
      } else {
          win.requestAnimationFrame(main);
      }
  }

  function init() {
      lastTime = Date.now();
      main();
  }


  function update(dt) {
      updateEntities(dt);
  }

  function renderEntities() {
      allEnemies.forEach(function(enemy) {
          enemy.render();
      });
      allGems.forEach(function(gem) {
          gem.render();
      });
      player.render();
  }

  function updateEntities(dt) {
      allEnemies.forEach(function(enemy) {
          enemy.update(dt);
      });
      player.update();
      allGems.forEach(function(gem) {
          gem.update(dt);
      });
  }

  function render() {

      renderMap();
      renderEntities();

  }


  ctx.clearRect(0, 0, canvas.width, canvas.height);


  Resources.load([
      "images/stone-block.png",
      "images/water-block.png",
      "images/grass-block.png",
      "images/enemy-bug.png",
      "images/char-boy.png",
      "images/Star.png",
      "images/Gem-Blue.png"
  ]);
  Resources.onReady(init);
  global.ctx = ctx;
})(this);