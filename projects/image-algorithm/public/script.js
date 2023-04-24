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
        let r = randomRGBA()
        let g = randomRGBA()
        let b = randomRGBA()
        let a = randomRGBA()
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        let maxY = maxRandom(image.height)
        let maxX = maxRandom(image.width)
        ctx.moveTo(maxX, maxY)
        let triObj = { 'points': [], 'color': { r, g, b, a } }
        triObj.points.push({ 'x': maxX, 'y': maxY })
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
            triObj.points.push({ 'x': xDistance, 'y': yDistance })
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
    console.log({ 'fitness': fitness(), 'batch': batch })
    return { 'fitness': fitness(), 'batch': batch }
}

const mutate = (batches) => {
    for (let i = 1; i < batches.length; i++) {
        let random = maxRandom(batches[i].length)
        let newTri = batches[i][random]
        let oldTri = batches[i - 1][random]
        batches[i - 1][random] = newTri
        batches[i][random] = oldTri
    }
    return batches
}

const drawBatch = (batch) => {
    ctx.globalAlpha = 0.5
    ctx.beginPath()
    ctx.fillStyle = `rgba(${batch.color.r}, ${batch.color.g}, ${batch.color.b}, ${batch.color.a})`
    ctx.moveTo(batch.points[0].x, batch.points[0].y)
    for (let i = 1; i < 2; i++) {
        ctx.lineTo(batch.points[i].x, batch.points[0].y)
    }
    ctx.fill()
}

const run = (batchcount, limit) => {
    let batches = []
    for (let j = 0; j < limit; j++) {
        for (let i = 0; i < batchcount; i++) {
            batches.push(batchFitness())
        }
        mutate(batches)
    }
}
document.querySelector('#generate').onclick = () => run(10, 5);
document.querySelector('#triangles').onchange = (e) => { if (e.target.value !== '') { triangleCount = e.target.value } else { console.log('triangle count is empty') } };