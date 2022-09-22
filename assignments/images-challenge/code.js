/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */



const lineOfCircles = (radius) => {
  let dif = radius;
  let x = 0;
  while (x < Math.floor(width / (radius * 2))) {
    drawFilledCircle(dif, height / 2, radius, 'red')
    x = x + 1
    dif = dif + radius * 2
  }
}

const altLineOfCircles = (radius) => {
  let dif = radius;
  let count = 0;
  let alternate = 0;
  let color = 'red';
  while (count < Math.floor(width / (radius * 2))) {
    drawFilledCircle(dif, height / 2, radius, color);
    count = count + 1;
    dif = dif + radius * 2;
    if (alternate % 2 == 0) {
      color = 'blue';
    }
    if (alternate % 2 == 1) {
      color = 'red';
    }
    alternate = alternate + 1
  }
};

  let dif = radius;
  let count = 0;
  let alternate = 0;
  let color = 'red';
  while (count < Math.floor(width / (radius * 2))) {
    drawFilledCircle(dif, height / 2, radius, color);
    count = count + 1;
    dif = dif + radius * 2;
    if (alternate % 2 == 0) {
      color = 'blue';
    }
    if (alternate % 2 == 1) {
      color = 'red';
    }
    alternate = alternate + 1