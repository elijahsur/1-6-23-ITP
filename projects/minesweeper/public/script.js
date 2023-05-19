let size = 6

const randomRGB = () =>
    Array(3)
        .fill()
        .map(() => Math.floor(Math.random() * 255));

const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const setRandomColor = (element) => {
    const [r, g, b] = randomRGB();
    element.style.background = rgb(r, g, b);
    element.style.color = rgb(255 - r, 255 - g, 255 - b);
};

const grid = document.querySelector('#grid');

const reset = (e) => {
    if (e.target.value === '') {
        console.log('value is empty! at ' + e.target)
    } else {
        console.log(`setting value to ${e.target.value}`);
        size = e.target.value
    }
    drawBox()
};

const drawBox = () => {
    document.getElementById('grid').innerHTML = "";
    grid.style.setProperty('gridTemplateColumns',`repeat(${size}, 1fr);`)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        setRandomColor(div);
        div.onclick = (e) => setRandomColor(e.target);
        grid.append(div);
    }
}

drawBox()

document.querySelector('#size').onchange = reset;
