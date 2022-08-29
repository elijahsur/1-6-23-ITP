const drawFrame = (time) => {
  drawFilledCircle((time / 5) % width, height, 50, 'white');
  drawFilledCircle((time / 5) % width, 0, 50, 'white');
  drawFilledCircle((time / 5) % width - 10, height, 50, 'black');
  drawFilledCircle((time / 5) % width - 10, 0, 50, 'black');
};
animate(drawFrame);
