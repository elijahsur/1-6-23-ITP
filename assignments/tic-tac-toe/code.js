// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
let counter = 0;
let stopcounter = 0;


registerOnclick((x, y) => {
  if (stopcounter < 9) {
    let xOrY = 'x'
    counter++
    stopcounter++
    if (counter % 2 === 0) {
      xOrY = 'x'
    } else {
      xOrY = 'o'
    }
    drawText(xOrY, x - 50, y, 'black', Math.min(width, height) * .4);
  }
});

drawLine(width / 1.5, height, width / 1.5, 0, 'black', 4)
drawLine(width / 3, height, width / 3, 0, 'black', 4)
drawLine(0, height / 1.5, width, height / 1.5, 'black', 4)
drawLine(0, height / 3, width, height / 3, 'black', 4)