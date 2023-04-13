//temp assignment of the image to the mona lisa, already loaded on the website
let image = document.querySelector('#mona-lisa');

let canvas = document.querySelector('canvas');

let picture = document.querySelector('#picture');

let triangleCount = 50;

picture.height = image.height / 2
picture.width = image.width / 2

let ctx = canvas.getContext("2d");
let cdy = picture.getContext("2d");

cdy.drawImage(image, -(image.width / 4), 0)

canvas.height = picture.height
canvas.width = picture.width

//specific max amount, then generates random numbers
const maxRandom = (max) => {
    return Math.floor(Math.random() * max)
};

//draws the first batch of random triangles around the canvas
const randomTriangles = () => {
    let testx = maxRandom(picture.width)
    let testy = maxRandom(picture.height)
    const data = cdy.getImageData(testx, testy, 1, 1).data
    console.log(`rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255}), ${testx}, ${testy}`)
    for (let i = 0; i < triangleCount; i++) {
        ctx.globalAlpha = 0.5
        ctx.beginPath()
        ctx.strokeStyle = 'black'
        let maxY = maxRandom(image.height)
        let maxX = maxRandom(image.width)
        ctx.moveTo(maxX, maxY)
        for (let i = 0; i < 2; i++) {
            let xDistance = maxX
            if (maxRandom(2) === 1) {
                xDistance = maxX + (maxRandom(50) + 50)
            } else {
                xDistance = maxX - (maxRandom(50) - 50)
            }
            let yDistance = maxY
            if (maxRandom(2) === 1) {
                yDistance = maxY + (maxRandom(50) + 50)
            } else {
                yDistance = maxY - (maxRandom(50) - 50)
            }
            ctx.lineTo(xDistance, yDistance)
        }
        ctx.fill()
    }
}
    document.querySelector('#generate').onclick = () => randomTriangles();
    document.querySelector('#triangles').onchange = (e) => { if (e.target.value !== '') { triangleCount = e.target.value } else { console.log('triangle count is empty') } };