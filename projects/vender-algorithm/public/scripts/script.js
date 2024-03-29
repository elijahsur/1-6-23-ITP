
import { algorithm } from './algorithm.js';

////////////////////////////////////////////////////////////////////////////////

let cityCount = 10;
let boardSize = 500
let batchAmount = 500;
let totalGenerations = 500;
let bruteForceValue = false;
let custom
let canvas = document.querySelector('canvas')
const can = canvas.getContext("2d")
canvas.height = 500
canvas.width = 500
can.lineWidth = 15
can.strokeStyle = "black"


const fullGenerate = () => {
  document.querySelector('#generation').textContent = ''
  can.reset()
  let generation = algorithm(cityCount, boardSize, batchAmount, totalGenerations, bruteForceValue, custom)
  if (bruteForceValue) {
    let multiplyBy = Math.floor(10 ** (generation.algorithmFitness.toString().length + 1))
    console.log(multiplyBy)
    document.querySelector('#fitness').textContent = 'algorithm fitness: ' + Math.floor(1 / generation.algorithmFitness * multiplyBy) + ', ' + 'bruteforce fitness: ' + Math.floor(1 / generation.bruteforceFitness * multiplyBy)
  } else {
    document.querySelector('#fitness').textContent = 'fitness: ' + generation.fitness
    for (let i = 0; i < generation.path.length; i++) {
      let list = document.createElement('li')
      list.append(document.createTextNode(JSON.stringify(generation.path[i])))
      document.querySelector('#generation').append(list)
    }
  }
  console.log(generation)
  if (!bruteForceValue) {
    canvas.width = boardSize
    canvas.height = boardSize
    drawPath(generation)
  } else {
    canvas.width = 0
    canvas.height = 0
  }
}

const drawCities = (pandf) => {
  for (let j = 0; j < pandf.path.length; j++) {
    can.beginPath()
    can.fillStyle = "black"
    can.ellipse(pandf.path[j].x, pandf.path[j].y, 5, 5, 0, 0, 360)
    can.fill()
  }
}

const drawRoute = (pandf) => {
  let colorAddition = 0
  for (let i = 1; i < pandf.path.length; i++) {
    can.beginPath()
    can.moveTo(pandf.path[i - 1].x, pandf.path[i - 1].y)
    can.strokeStyle = `rgb(${colorAddition}, 0, 0)`
    can.lineTo(pandf.path[i].x, pandf.path[i].y)
    colorAddition = colorAddition + 255 / pandf.path.length
    can.stroke()
  }
}

const drawPath = (pandf) => {
  drawCities(pandf)
  drawRoute(pandf)
  console.log('path drawn')
}

document.querySelector('#bruteForce').onclick = () => { if (bruteForceValue) { bruteForceValue = false } else { bruteForceValue = true } };
document.querySelector('#generate').onclick = () => fullGenerate();
document.querySelector('#cities').onchange = (e) => { if (e.target.value !== '') { cityCount = e.target.value } else { console.log('cities is empty') } };
document.querySelector('#boardSize').onchange = (e) => { if (e.target.value !== '') { boardSize = e.target.value; canvas.width = e.target.value; canvas.height = e.target.value } else { console.log('boardSize is empty') } };
document.querySelector('#batchSize').onchange = (e) => { if (e.target.value !== '') { batchAmount = e.target.value } else { console.log('batchSize is empty') } };
document.querySelector('#totGenerations').onchange = (e) => { if (e.target.value !== '') { totalGenerations = e.target.value } else { console.log('totGenerations is empty') } };
document.querySelector('#custom').onchange = (e) => { if (e.target.value !== '') { custom = e.target.value } else { console.log('totGenerations is empty') } };
