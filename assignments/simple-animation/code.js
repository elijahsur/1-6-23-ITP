const drawFrame = (time) => {
  drawFilledCircle((time / 5) % width, height, 100, 'white');
  drawFilledCircle((time / 5) % width, 0, 100, 'white');
  drawFilledCircle((time / 5) % width - 10, height, 100, 'black');
  drawFilledCircle((time / 5) % width - 10, 0, 100, 'black');
};
animate(drawFrame);
