//temp assignment of the image to the mona lisa, already loaded on the website
let image = document.querySelector('#mona-lisa');

let canvas = document.querySelector('canvas');

let circleCount = 50

canvas.height = image.height
canvas.width = image.width

let ctx = canvas.getContext("2d");

//specific max amount, then generates random numbers
const maxRandom = (max) => {
    return Math.floor(Math.random() * max)
};

//draws the first batch of random circles around the canvas
const randomCircles = () => {
 for (let i = 0; i < circleCount; i++) {
    let maxY = maxRandom(image.height)
    let maxX = maxRandom(image.width)
    ctx.globalAlpha = 0.5
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.ellipse(maxX, maxY, 10, 10, 0, 0, 360)
    ctx.fill()
 }
}
document.querySelector('#generate').onclick = () => randomCircles();
document.querySelector('#circles').onchange = (e) => { if (e.target.value !== '') { circleCount = e.target.value } else { console.log('triangle count is empty') } };