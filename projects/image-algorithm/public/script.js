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
// returns a random value that is acceptable in RGBA
const randomRGBA = () => {
    return maxRandom(255)
}

//draws the first batch of random triangles around the canvas
const randomTriangles = () => {
    let batch = []
    for (let i = 0; i < triangleCount; i++) {
        ctx.globalAlpha = 0.5
        ctx.beginPath()
        ctx.fillStyle = `rgba(${randomRGBA()}, ${randomRGBA()}, ${randomRGBA()}, ${randomRGBA()})`
        let maxY = maxRandom(image.height)
        let maxX = maxRandom(image.width)
        ctx.moveTo(maxX, maxY)
        let triObj = { 'xy1': [], 'xy2': [], 'xy3': [], 'rgb': ctx.fillStyle }
        for (let i = 0; i < 2; i++) {
            let xDistance = maxX
            if (maxRandom(2) === 1) {
                xDistance = maxX + (maxRandom(50) + 50)
            } else {
                xDistance = maxX - (maxRandom(50) + 50)
            }
            let yDistance = maxY
            if (maxRandom(2) === 1) {
                yDistance = maxY + (maxRandom(50) + 50)
            } else {
                yDistance = maxY - (maxRandom(50) + 50)
            }
            ctx.lineTo(xDistance, yDistance)
            if (i === 0) {
                triObj.xy1 = [xDistance, yDistance]
            } else if (i === 1) {
                triObj.xy2 = [xDistance, yDistance]
            } else {
                triObj.xy3 = [xDistance, yDistance]
            }
        }
        ctx.fill()
        batch.push(triObj)
    }
    return batch
}

const fitness = () => {
    let totFitness = 0
    for (let i = 0; i < (picture.height); i++) {
        for (let j = 0; j < picture.width; j++) {
            let genPixel = ctx.getImageData(j, i, 1, 1).data
            let picPixel = cdy.getImageData(j, i, 1, 1).data
            totFitness = totFitness + (picPixel[0] - genPixel[0] + picPixel[1] - genPixel[1] + picPixel[2] - genPixel[2] + picPixel[3] - genPixel[3])
        }
    }
    return totFitness
}

const batchFitness = () => {
    ctx.clearRect(image.height / 2, image.width / 2, image.width, image.height)
    let batch = randomTriangles()
    console.log({'fitness' : fitness(), 'batch': batch})
    return {'fitness' : fitness(), 'batch': batch}
}

document.querySelector('#generate').onclick = () => batchFitness();
document.querySelector('#triangles').onchange = (e) => { if (e.target.value !== '') { triangleCount = e.target.value } else { console.log('triangle count is empty') } };