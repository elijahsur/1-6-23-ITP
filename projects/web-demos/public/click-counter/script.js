let counter = 0;
let seconds = 0;
const randomRGB = () =>
  Array(3)
    .fill()
    .map(() => Math.floor(Math.random() * 255));

const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const randomRGBColor = () => {
  const values = randomRGB();
  return rgb(values[0], values[1], values[2]);
};
const body = document.querySelector('body')
const lastClicked = document.createElement('p')
body.append(lastClicked)
document.querySelector('p').onclick = (e) => {
  const p = e.target;
  counter++;
  if (counter === 1) {
    p.innerHTML = 'I have been clicked <span id="counter"></span> time.';
  }
  if (counter > 1) {
    p.innerHTML = 'I have been clicked <span id="counter"></span> times.'
  }
  if (counter % 10 === 0) {
    p.innerHTML = `I have been clicked <span style="color:${randomRGBColor()}"><span id="counter"></span></span> times!`
    if (counter === 10) {
      lastClicked.textContent = 'I last reached 10 0 seconds ago!'
      seconds = date.now() / 1000
    } else {
    let currentSeconds = Date.now() / 1000
    let difference = currentSeconds - seconds
    seconds = Date.now() / 1000
    lastClicked.textContent = 'I last reached 10 ' + difference + ` seconds ago!`
    // how would i make "difference" only include the decimal spots up to the first 2-ish? just to simplify the number
    }
  }
  if (counter % 100 === 0) {
    p.innerHTML = 'I have been clicked <span style="color:yellow"><span id="counter"></span></span> times!'
  }
  p.querySelector('#counter').textContent = `${counter}`;
};
