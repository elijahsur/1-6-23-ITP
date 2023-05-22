let size = 6
let bombcount = Math.trunc(size * size / 8)

const maxRandom = (max) => {
    return Math.floor(Math.random() * max)
};

const randomRGB = () =>
    Array(3)
        .fill()
        .map(() => Math.floor(Math.random() * 255));

const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const setColor = (element, location) => {
    if (location.bomb === true) {
        element.style.color = rgb(255, 0, 0)
        element.style.background = rgb(255, 0, 0)
    } else {
        element.style.color = rgb(255, 255, 255)
        element.style.background = rgb(255, 255, 255)
    }
};

const hitBomb = (element, location) => {
    if (location.bomb === true) {
        console.log('hit bomb')
        drawBox()
    } else {
        console.log('did not hit bomb')
        clearBoxes(element, location)
    }
}

const clearBoxes = (element, location) => {
    console.log(location)
}

const grid = document.querySelector('#grid');

const reset = (e) => {
    if (e.target.value === '') {
        console.log('value is empty! at ' + e.target)
    } else {
        console.log(`setting value to ${e.target.value}`);
        size = e.target.value
        bombcount = Math.trunc(size * size / 8)
        console.log('bomb count: ' + bombcount)
    }
    drawBox()
};

const drawBox = () => {
    document.getElementById('grid').innerHTML = "";
    grid.style.setProperty('grid-template-columns',`repeat(${size}, 1fr)`)
    let list = planBombs()
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        setColor(div, list[i]);
        div.onclick = (e) => hitBomb(e.target, list[i]);
        grid.append(div);
    }
}

const planBombs = () => {
    let bombArray = [];
    let bombsLeft = bombcount
    for (let i = 0; i < size * size; i++) {
        bombArray.push({i, 'bomb': false})
    }
    for (let j = 0; j < bombcount; j++) {
        bombArray[maxRandom(bombArray.length)].bomb = true
    }
    return bombArray
}

drawBox()

document.querySelector('input').onchange = reset;
