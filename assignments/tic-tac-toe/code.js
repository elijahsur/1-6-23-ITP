// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
let counter = 0;



registerOnclick((x, y) => {
  let xOrY = 'x'
  counter++
  if (counter % 2 === 0) {
    xOrY = 'x'
  } else {
    xOrY = 'o'
  }
    drawText(xOrY, x, y, 'black', Math.min(width, height) * 0.3);

});
