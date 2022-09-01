const drawFrame = (time) => {
  clear();
  drawFilledCircle((time / 5) % width - 54, height, 500, 'white');
  drawLine(width, height, 0, 0, 'blue', 5);
}
animate(drawFrame);