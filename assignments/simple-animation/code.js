const drawFrame = (time) => {
  drawFilledCircle((time / 5) % width, height, 1000, 'purple');
  drawFilledCircle((time / 5) % width - 10, height, 1000, 'white');
animate(drawFrame);
}