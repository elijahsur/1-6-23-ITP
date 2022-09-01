const drawFrame = (time) => {
  drawLine(x1, y1, x2, y2, color, width);
  drawFilledSquare((time / 5) % width - 54, height, 500, 'white');
}
animate(drawFrame);