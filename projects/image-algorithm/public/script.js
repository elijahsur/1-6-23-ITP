let image = document.querySelector('#mona-lisa');

let canvas = document.querySelector('canvas');

let picture = document.querySelector('#picture');

let triangleCount = 50;


let ctx = canvas.getContext("2d");
let cdy = picture.getContext("2d");

const imgDraw = () => {
    picture.height = image.height / 2
    picture.width = image.width / 2
    canvas.height = picture.height
    canvas.width = picture.width
    cdy.drawImage(image, -(image.width / 4), 0)
}

//if (image.complete) {
 //   imgDraw()
//} else {
 //   image.onload = imgDraw
//}
picture.width = 20
picture.height = 20
canvas.height = 20
canvas.width = 20
cdy.fillStyle = 'red'
cdy.fillRect(250,250,50,50)

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
        let r = randomRGBA()
        let g = randomRGBA()
        let b = randomRGBA()
        let a = randomRGBA()
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        let maxY = maxRandom(canvas.height)
        let maxX = maxRandom(canvas.width)
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
            triObj.points.push({ 'x': xDistance, 'y': yDistance })
        }
        batch.push(triObj)
    }
    return batch
}

const drawBatch = (batch) => {
    for (let i = 0; i < batch.length; i++) {
        drawTriangle(batch[i])
    }
    console.log('batch drawn')
}

/*
 * Translate value at a given alpha to the corresponding value at full opacity.
 * Loosely based on code from https://stackoverflow.com/a/11615135.
 */
const opaquify = (v, a) => Math.round((v * a) / 255 + (255 - a));

/*
 * Translate rgba values we get from ImageData into RGB triples.
 */
const toRGB = (r, g, b, a) => [r, g, b].map((v) => opaquify(v, a));

const fitness = () => {
    let totFitness = 0
    let drawData = ctx.getImageData(0, 0, picture.width, picture.height).data
    let imgData = cdy.getImageData(0, 0, picture.width, picture.height).data
    for (let i = 0; i < (drawData.length); i += 4) {
        let drawPixel = drawData.slice(i, i + 4)
        let imgPixel = imgData.slice(i, i + 4)
        let rgbDraw = toRGB(...drawPixel)
        let rgbIMG = toRGB(...imgPixel)
        totFitness = totFitness + (((rgbIMG[0] - rgbDraw[0]) ** 2) + ((rgbIMG[1] - rgbDraw[1]) ** 2) + ((rgbIMG[2] - rgbDraw[2]) ** 2))
    }
    return 1 / Math.sqrt(totFitness)
}

const batchFitness = (batch) => {
    ctx.clearRect(image.height / 2, image.width / 2, image.width, image.height)
    drawBatch(batch.triangles)
    let fit = fitness()
    return { 'fitness': fit, 'triangles': batch.triangles }
}

const cross = (triangles) => {
    let newBatch = []
    for (let i = 1; i < triangles.length; i++) {
            let firstHalf = triangles[i - 1].triangles.slice(0, triangles[i - 1].triangles.length / 2)
            let secondHalf = triangles[i].triangles.slice(triangles[i].triangles.length / 2, triangles[i].triangles.length)
            newBatch.push({ 'fitness': 0, 'triangles': firstHalf.concat(secondHalf) })
    }
    return newBatch
}

const drawTriangle = (triangle) => {
    ctx.globalAlpha = 1
    ctx.beginPath()
    ctx.fillStyle = `rgba(${triangle.color.r}, ${triangle.color.g}, ${triangle.color.b}, ${triangle.color.a})`
    ctx.moveTo(triangle.points[0].x, triangle.points[0].y)
    for (let i = 1; i < triangle.points.length; i++) {
        ctx.lineTo(triangle.points[i].x, triangle.points[i].y)
    }
    ctx.fill()
}

const run = (batchcount, limit) => {
    let batches = []
    for (let j = 0; j < limit; j++) {
        let dif = batchcount - batches.length
        for (let i = 0; i < dif; i++) {
            batches.push({ 'triangles': randomTriangles() })
        }
        let mBatches = cross(batches)
        for (let h = 0; h < mBatches.length; h++) {
            mBatches[h] = batchFitness(mBatches[h])
        }
        console.log(batches.length)
        batches = rank(mBatches)
        console.log('ranked')
        console.log([batches.length, batches[0].fitness])
    }
    ctx.clearRect(image.height / 2, image.width / 2, image.width, image.height)
    drawBatch(batches[0].triangles)
}

const rank = (batches) => {
    batches.sort((a, b) => b.fitness - a.fitness)
    return batches.slice(0, batches.length / 2)
}

document.querySelector('#generate').onclick = () => run(20, 100);
document.querySelector('#triangles').onchange = (e) => { if (e.target.value !== '') { triangleCount = e.target.value } else { console.log('triangle count is empty') } };