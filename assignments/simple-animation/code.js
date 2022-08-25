const drawFrame = (time) => {
  clear();
  drawFilledCircle((time / 10) % width, height, 50, 'purple');
  drawFilledCircle((time / 10) % width, -1*height, 50, 'purple');
};
animate(drawFrame);
