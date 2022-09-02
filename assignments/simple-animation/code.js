// This is an example of a function definition. This function is called by the
// underlying animation framework thanks to the call to animate below. This
// function is responsible for drawing one frame of the animation. You can
// change the code in here using the same functions you had in the simple
// drawing exercise to draw shapes. The argument to this function, time, is the
// number of milliseconds (one millionth of a second) since the program started.
const drawFrame = (time) => {
    clear();
    drawFilledCircle((time/10)%width, (time/10)%height, 25, 'white');
    drawFilledCircle((time/10 + 40)%width, (time/10 + 40)%height, 25, 'blue');
    drawFilledCircle((time/10 + 80)%width, (time/10 + 80)%height, 25, 'black');
    drawFilledCircle((time/10 + 120)%width, (time/10 + 120)%height, 25, 'red');
    drawFilledCircle((time/10 + 160)%width, (time/10 + 160)%height, 25, 'white');
    drawFilledCircle((time/10 + 200)%width, (time/10 + 200)%height, 25, 'blue');
    drawFilledCircle((time/10 + 240)%width, (time/10 + 240)%height, 25, 'black');
    drawFilledCircle((time/10 + 280)%width, (time/10 + 280)%height, 25, 'red');
    drawFilledCircle((time/10 + 320)%width, (time/10 + 320)%height, 25, 'white');
    drawFilledCircle((time/10 + 360)%width, (time/10 + 360)%height, 25, 'blue');
    drawFilledCircle((time/10 + 400)%width, (time/10 + 400)%height, 25, 'black');
    drawFilledCircle((time/10 + 440)%width, (time/10 + 440)%height, 25, 'red');
    drawFilledCircle((time/10 + 480)%width, (time/10 + 480)%height, 25, 'white');
    drawFilledCircle((time/10 + 520)%width, (time/10 + 520)%height, 25, 'blue');
    drawFilledCircle((time/10 + 560)%width, (time/10 + 560)%height, 25, 'black');
    drawFilledCircle((time/10 + 600)%width, (time/10 + 600)%height, 25, 'red');
    drawFilledCircle((time/10 + 640)%width, (time/10 + 640)%height, 25, 'white');
    drawFilledCircle((time/10 + 680)%width, (time/10 + 680)%height, 25, 'blue');
    drawFilledCircle((time/10 + 720)%width, (time/10 + 720)%height, 25, 'black');
    drawFilledCircle((time/10 + 760)%width, (time/10 + 760)%height, 25, 'red');
    drawFilledCircle((time/10 + 800)%width, (time/10 + 800)%height, 25, 'white');
    drawFilledCircle((time/10 + 840)%width, (time/10 + 840)%height, 25, 'blue');
    drawFilledCircle((time/10 + 880)%width, (time/10 + 880)%height, 25, 'black');
    drawFilledCircle((time/10 + 920)%width, (time/10 + 920)%height, 25, 'red');
    drawFilledCircle((time/10 + 960)%width, (time/10 + 960)%height, 25, 'white');
    drawFilledCircle((time/10 + 1000)%width, (time/10 + 1000)%height, 25, 'blue');
    drawFilledCircle((time/10 + 1040)%width, (time/10 + 1040)%height, 25, 'black');
    drawFilledCircle((time/10 + 1080)%width, (time/10 + 1080)%height, 25, 'red');
    drawFilledCircle((time/10 + (4*29))%width, (time/10 + (4*29))%height, 25, 'white');
    drawFilledCircle((time/10 + (4*30))%width, (time/10 + (4*30))%height, 25, 'blue');
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