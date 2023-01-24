let counter = 0;
const randomRGB = () =>
  Array(3)
    .fill()
    .map(() => Math.floor(Math.random() * 255));
//i want to try to add a random color to the number every 10 numbers, but im not sure how to use this randomRGB function
const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
document.querySelector('p').onclick = (e) => {
  const p = e.target;
  counter++;
  if (counter === 1) {
    p.innerHTML = 'I have been clicked <span id="counter"></span> time</span>.';
  }
  if (counter > 1) {
    p.innerHTML = 'I have been clicked <span id="counter"></span> times</span>.'
  }
  if (counter/10 === Math.floor(counter/10)) {
    p.innerHTML = 'I have been clicked <span style="color:red"><span id="counter"></span></span> times</span>!'
  }
  if (counter/100 === Math.floor(counter/100)) {
    p.innerHTML = 'I have been clicked <span style="color:yellow"><span id="counter"></span></span> times</span>!'
  }
  p.querySelector('#counter').textContent = `${counter}`;
};
