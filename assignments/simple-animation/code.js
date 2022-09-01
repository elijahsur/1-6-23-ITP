const drawFrame = (time) => {
  drawLine(width, height, 0, 0, 'blue', 5);
  drawFilledCircle((time / 5) % width - 54, height, 500, 'white');
}
animate(drawFrame);