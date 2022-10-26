const sum = (a, b) => {
  return a + b
}
const difference = (a, b) => {
  return a - b
}
const product = (a, b) => {
  return a * b
}
const ratio = (a, b) => {
  return a / b
}
const remainder = (a, b) => {
  return a % b
}
const average = (a, b) => {
  return (a + b) / 2
}

const twoDistance = (x1, x2, y1, y2) => {
  return Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2))
}

const manDistance = (x1, x2, y1, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

const squarePerimeter = (s) => {
  return 4 * s
}

const rectanglePerimeter = (width, height) => {
  return 2 * width + 2 * height
}

const squareArea = (s) => {
  return s ** 2
}

const rectangleArea = (width, height) => {
  return width * height
}

const areaTriangle = (base, height) => {
  return base / 2 * height
}

const baseTrapezoid = (b1, b2, height) => {
  return (b1 + b2) / 2 * height
}

const areaCircle = (r) => {
  return Math.pi * (r ** 2)
}

const circumferencecircle = (r) => {
  return 2 * Math.pi * r
}

const curvedSurface = (r, h) => {
  return 2 * Math.pi * r * h
}

const totalSurface = (r, h) => {
  return 2 * Math.pi * r * h + Math.pi(r * r) * 2
}