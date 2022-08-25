const drawFrame = (time) => {
  drawFilledCircle((time / 5) % width, height, 50, 'blue');
  drawFilledCircle((time / 5) % width, 0, 50, 'blue');
  drawFilledCircle((time / 6) % width, height, 50, 'red');
  drawFilledCircle((time / 6) % width, 0, 50, 'red');
};
animate(drawFrame);
