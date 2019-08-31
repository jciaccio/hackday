function renderMap() {
    var rowImages = [
        "images/water-block.png",   // Top row is water
        "images/stone-block.png",   // Row 1 of 3 of stone
        "images/stone-block.png",   // Row 2 of 3 of stone
        "images/stone-block.png",   // Row 3 of 3 of stone
        "images/grass-block.png",   // Row 1 of 2 of grass
        "images/grass-block.png" ,
        "images/grass-block.png" ,
        "images/grass-block.png" ,
        "images/grass-block.png" ,
        "images/grass-block.png" ,
        "images/grass-block.png" ,
        "images/grass-block.png" , // Row 2 of 2 of grass
      ],
      numRows = 12,
      numCols = 10,
      row, col;
    
    // Before drawing, clear existing canvas
    
    for (row = 0; row < numRows; row++) {
      for (col = 0; col < numCols; col++) {
        ctx.drawImage(Resources.get(rowImages[row]), col * gameSetting.tileW, row * gameSetting.tileH,gameSetting.tileW,gameSetting.tileH*2);
      }
    }
}