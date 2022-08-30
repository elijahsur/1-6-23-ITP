const drawFrame = (time) => {
  drawFilledCircle((time / 5) % width, height, 100, 'purple');
  drawFilledCircle((time / 5) % width - 4, height, 100, 'white');
}
animate(drawFrame);