const drawFrame = (time) => {
  drawFilledCircle((time / 5) % width, height, 100, 'red');
  drawFilledCircle((time / 5) % width, width, 100, 'red');
  drawFilledCircle((time / 5) % width - 10, height, 100, 'white');
  drawFilledCircle((time / 5) % width - 10, 0, 100, 'white');
};
animate(drawFrame);
