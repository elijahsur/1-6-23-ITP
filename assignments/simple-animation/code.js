const drawFrame = (time) => {
  clear();
  drawFilledCircle((time / 5) % width, height, 50, 'purple');
  drawFilledCircle((time / 5) % width, 0, 50, 'purple');
};
animate(drawFrame);
