const drawFrame = (time) => {
  drawFilledCircle((time / 5) % width, height, 200, 'purple');
  drawFilledCircle((time / 5) % width, 0, 100, 'purple');
  drawFilledCircle((time / 5) % width - 10, height, 200, 'white');
  drawFilledCircle((time / 5) % width - 10, 0, 100, 'white');
};
animate(drawFrame);
