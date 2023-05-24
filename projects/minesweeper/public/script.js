let size = 6
let bombcount = Math.trunc(size * size / 8)

const title = document.querySelector('h1');

const maxRandom = (max) => {
    return Math.floor(Math.random() * max)
};

const randomRGB = () =>
    Array(3)
        .fill()
        .map(() => Math.floor(Math.random() * 255));

const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const setColor = (element, location) => {
    if (location.bomb) {
        element.style.color = rgb(0, 255, 0)
        element.style.background = rgb(0, 255, 0)
    } else {
        element.style.color = rgb(255, 255, 255)
        element.style.background = rgb(255, 255, 255)
    }
};

const hitBomb = (location, list, number) => {
    if (list[number].bomb) {
        document.querySelector('h1').innerHTML = 'lost!'
        setTimeout(() => { document.querySelector('h1').innerHTML = 'aknakutató hajó' }, 1000)
        drawBox()
    } else {
        console.log('did not hit bomb')
        clearBoxes(location, number, [], list)
    }
}

const grid = document.querySelector('#grid');

const clearBoxes = (location, number, checkedNumbers, list) => {
    if (!checkedNumbers.some((x) => x === number)) {
        console.log(checkedNumbers)
        if (list[number] >= 0 && list[number].bomb) {
            grid.querySelectorAll('.box')[number].style.color = rgb(255, 0, 0)
        } else {
            checkedNumbers.push(number)
            clearBoxes(location, number + size, checkedNumbers, list)
            clearBoxes(location, number - size, checkedNumbers, list)
            clearBoxes(location, number + 1, checkedNumbers, list)
            clearBoxes(location, number - 1, checkedNumbers, list)
        }
    }
}

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
    grid.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`)
    let list = planBombs()
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        setColor(div, list[i]);
        div.onclick = (e) => hitBomb(e.target, list, i);
        grid.append(div);
    }
}

const planBombs = () => {
    let bombArray = [];
    for (let i = 0; i < size * size; i++) {
        bombArray.push({ i, 'bomb': false })
    }
    for (let j = 0; j < bombcount; j++) {
        bombArray[maxRandom(bombArray.length)].bomb = true
    }
    return bombArray
}

drawBox()

document.querySelector('input').onchange = reset;
