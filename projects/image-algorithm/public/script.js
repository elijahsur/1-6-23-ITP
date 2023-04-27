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

// REVIEW: I'd expect this function to generate the batch of random triangles
// without drawing them. Then I'd have a separate function that given a batch of
// triangles and a canvas (or a context, maybe), would draw them all.
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

// REVIEW: this function should almost certainly take the batch you want to
// measure the fitness of as an argument. This might be where you would use the
// function I suggested above that takes a batch of triangles and draws them
// all. So to measure the fitness you clear the rect, draw all the triangles,
// and then compute the fitness based on image data. Also, fitness() is a pretty
// expensve function to call so you should only call it once and save the value
// if you need it twice, as you do here.
const batchFitness = () => {
    ctx.clearRect(image.height / 2, image.width / 2, image.width, image.height)
    let batch = randomTriangles()
    console.log({ 'fitness': fitness(), 'batch': batch })
    return { 'fitness': fitness(), 'batch': batch }
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
        let random = maxRandom(batches[i].length)
        let newTri = batches[i][random]
        let oldTri = batches[i - 1][random]
        batches[i - 1][random] = newTri
        batches[i][random] = oldTri
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
            batches.push(batchFitness())
            console.log(batches)
        }
        let mBatches = mutate(batches)
        for (let h = 0; h < mBatches.length; h++) {
            for (let k = 0; k < mBatches[h].batch.length; k++) {
                ctx.clearRect(image.height / 2, image.width / 2, image.width, image.height)
                drawTriangle(mBatches[h].batch[k])
            }
            mBatches[h].fitness = fitness()
        }
        batches = rank(mBatches)
        console.log('ranked batches')
    }
    ctx.clearRect(image.height / 2, image.width / 2, image.width, image.height)
    for (let z = 0; z < batches[0].batch.length; z++) {
        drawTriangle(batches[0].batch[z])
    }
}

const rank = (batches) => {
    batches.sort((a, b) => b.fitness - a.fitness)
    return batches.slice(0, batches.length / 2)
}
document.querySelector('#generate').onclick = () => run(3, 5);
document.querySelector('#triangles').onchange = (e) => { if (e.target.value !== '') { triangleCount = e.target.value } else { console.log('triangle count is empty') } };
