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
        let r = randomRGBA()
        let g = randomRGBA()
        let b = randomRGBA()
        let a = randomRGBA()
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        let maxY = maxRandom(image.height)
        let maxX = maxRandom(image.width)
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

// REVIEW: This is good. You might want to use that code I gave you to convert
// from the four RGBA values to three RGB just because each pixel is whatever
// color it is and you can get the same color different ways with different
// alpha values.
const fitness = () => {
    let totFitness = 0
    for (let i = 0; i < (picture.height); i++) {
        for (let j = 0; j < picture.width; j++) {
            // REVIEW: I'm not sure but it might be a lot faster to only call
            // getImageData once outside the loop. I.e. call getImageData() to
            // get *all* the image data and then index into the resulting .data
            // array to get the specific pixels.
            let genPixel = ctx.getImageData(j, i, 1, 1).data
            let picPixel = cdy.getImageData(j, i, 1, 1).data
            totFitness = totFitness + (picPixel[0] - genPixel[0] + picPixel[1] - genPixel[1] + picPixel[2] - genPixel[2] + picPixel[3] - genPixel[3])
        }
    }
    return totFitness
}

const batchFitness = () => {
    ctx.clearRect(image.height / 2, image.width / 2, image.width, image.height)
    drawBatch(batch.triangles)
    let fit = fitness()
    return { 'fitness' : fit, 'triangles': batch.triangles }
}

// REVIEW: I'd expect this function to take a single batch as its argument and
// return a mutated version of that batch. Because I'd expect that you're
// mutating a batch as the last step of making a new organism: i.e. you cross
// two batches to make a new batch and then mutate it and that's the child. Oh,
// wait, maybe this function is kind of doing the crossing but in place? I was
// perhaps mislead by the name. It's probably worth writing a function, cross,
// that takes two batches and produces a new batch based on crossing them. Then
// what this function is maybe actually doing, namely generating a whole new
// batch boils down to generating new offspring from randomly selected parents
// until you have a new batch of the right size. Anyway, we should probably talk
// about this function because I'm not quite sure how you intend it to work ...
const mutate = (batches) => {
    for (let i = 1; i < batches.length; i++) {
        let random = maxRandom(batches[i].triangles.length)
        let newTri = batches[i].triangles[random]
        let oldTri = batches[i - 1].triangles[random]
        batches[i - 1].triangles[random] = newTri
        batches[i].triangles[random] = oldTri
    }
    return batches
}

const drawTriangle = (triangle) => {
    ctx.globalAlpha = 0.5
    ctx.beginPath()
    ctx.fillStyle = `rgba(${triangle.color.r}, ${triangle.color.g}, ${triangle.color.b}, ${triangle.color.a})`
    ctx.moveTo(triangle.points[0].x, triangle.points[0].y)
    for (let i = 1; i < 2; i++) {
        ctx.lineTo(triangle.points[i].x, triangle.points[0].y)
    }
    ctx.fill()
}

const run = (batchcount, limit) => {
    let batches = []
    for (let j = 0; j < limit; j++) {
        for (let i = 0; i < batchcount - batches.length; i++) {
            batches.push(batchFitness({'fitness' : 24, 'triangles': randomTriangles()}))
            console.log(batches)
        }
        let mBatches = mutate(batches)
        for (let h = 0; h < mBatches.length; h++) {
            console.log([h, mBatches])
            mBatches[h] = batchFitness(mBatches[h])
        }
        batches = rank(mBatches)
        console.log('ranked batches')
    }
    ctx.clearRect(image.height / 2, image.width / 2, image.width, image.height)
    drawBatch(batches[0].triangles)
}

const test = () => {
    let t = randomTriangles()[2]
    console.log(t)
    drawTriangle(t)
}

const rank = (batches) => {
    batches.sort((a, b) => b.fitness - a.fitness)
    return batches.slice(0, batches.length / 2)
}
document.querySelector('#generate').onclick = () => test();
document.querySelector('#triangles').onchange = (e) => { if (e.target.value !== '') { triangleCount = e.target.value } else { console.log('triangle count is empty') } };
