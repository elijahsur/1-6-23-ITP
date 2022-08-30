const drawFrame = (time) => {
  drawFilledCircle((time / 5) % width - 50, height, 100, 'purple');
  drawFilledCircle((time / 5) % width - 54, height, 100, 'white');
}
animate(drawFrame);