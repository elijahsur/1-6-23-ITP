// This is an example of a function definition. This function is called by the
// underlying animation framework thanks to the call to animate below. This
// function is responsible for drawing one frame of the animation. You can
// change the code in here using the same functions you had in the simple
// drawing exercise to draw shapes. The argument to this function, time, is the
// number of milliseconds (one millionth of a second) since the program started.
const drawFrame = (time) => {
    clear();
    drawFilledCircle((time/10)%width, (time/10)%height, 25, 'white');
    drawFilledCircle((time/5)%width, (time/10)%height, 25, 'blue');
    drawFilledCircle((time/7)%width, (time/10)%height, 25, 'black');
    drawFilledCircle((time/12)%width, (time/10)%height, 25, 'red');
}

// This is a function that we define to make it easier to draw a triangle. You
// may want to experiment with writing your own functions using this one as a
// model to draw other shapes.

// This draws a falling trangle of a particular shape whose bottom point is
// positioned at x and whose y is a function of time.

// Leave this code here or the animation won't run. Also don't change the name
// of drawFrame either here or where it is defined. (Or, if you must, change it
// the same way in both places.)
animate(drawFrame);