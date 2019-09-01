function renderMap() {

    var rowImages = [
        "images/water-block.png",   // Top row is water
        "images/stone-block.png",   // Row 3 of 3 of stone
        "images/grass-block.png",   // Row 1 of 2 of grass
      ]
      var map = [
         [ 1,1,1,1,1,1,1,1,1,1],
         [ 2,2,2,2,2,2,2,2,2,2],
         [ 2,0,0,2,2,0,2,0,0,2],
         [ 2,0,2,0,2,0,2,0,2,2],
         [ 2,0,2,0,2,0,2,0,2,2],
         [ 2,0,2,0,2,0,2,0,2,2],
         [ 2,0,2,0,2,0,2,0,0,2],
         [ 2,0,2,0,2,0,2,0,2,2],
         [ 2,0,2,0,2,0,2,0,2,2],
         [ 2,0,0,2,2,0,2,0,2,2],
         [ 2,2,2,2,2,2,2,0,0,2],
         [ 1,1,1,1,1,1,1,1,1,1],
      ]
      var tileMap = map.map((e)=>{
          let row = e.map((e)=>{
            return rowImages[e]
          })
          return row
         
      }),
      numRows = 12,
      numCols = 10,
       row, col;
    
    // Before drawing, clear existing canvas
    
    for (row = 0; row < numRows; row++) {
      for (col = 0; col < numCols; col++) {
        ctx.drawImage(Resources.get(tileMap[row][col]), col * gameSetting.tileW, row * gameSetting.tileH,gameSetting.tileW,gameSetting.tileH*2);
      }
    }
}