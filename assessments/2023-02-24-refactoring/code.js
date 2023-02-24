const x = width / 2

const radius = (size) => { return size / 2 }

const indSize = (size, p,) => { 
  const proportions = [3, 4, 5];
  return size * (p / proportions.reduce((tot, p) => tot + p, 0)) }

const background = (horizon) => {
  drawFilledRect(0, 0, width, horizon, '#ddeeff');
  drawFilledRect(0, horizon, width, height, 'white');
  drawLine(0, horizon, width, horizon, '#bbb');
}

const head = (headSize) => {
  const headY = (base - size) + indSize(headP) / 2
  drawCircle(x, headY, radius(headSize) + 2, 'black', 3);
  drawFilledCircle(x, headY, radius(headSize), 'white', 3);
}

const drawPicture = (base, size) => {

  const x = width / 2;

  const proportions = [3, 4, 5];

  const [headP, torsoP, buttP] = proportions;

  const torsoY = (base - size) + indSize(headP) / 2 + indSize(headP) / 2 + indSize(torsoP / 2)
  const buttY = torsoY + indSize(torsoP) / 2 + indSize(buttP / 2)

  const head = (headSize) => {
    drawCircle(x, (base - size) + indSize(headP) / 2, radius(headSize) + 2, 'black', 3);
    drawFilledCircle(x, (base - size) + indSize(headP) / 2, radius(headSize), 'white', 3);
  }

  const eyes = (headRadius) => {
    const eyeSpacing = headRadius * 0.25;
    const headY = (base - size) + indSize(headP) / 2
    drawFilledCircle(x - eyeSpacing, headY - eyeSpacing, 4, 'black');
    drawFilledCircle(x + eyeSpacing, headY - eyeSpacing, 4, 'black');
  }

  const nose = (headRadius) => {
    const noseLength = headRadius * 0.8;
    drawFilledTriangle(x, headY, x + noseLength, headY + noseLength * 0.2, x, headY + noseLength * 0.3, 'orange');
  }

  const mouth = (headSize) => {
    for (let i = 0; i < 5; i++) {
      const dy = -2 * (2.1 ** Math.abs(i - 2));
      drawFilledCircle(x - (i - 2.3) * radius(headSize) * 0.21, headY + radius(headSize) * 0.65 + dy, 4, 'black');
    }
  }

  const hat = (headRadius) => {
    const brimTop = headY - headRadius * 0.9;
    const brimWidth = headRadius * 2.25;
    const brimHeight = brimWidth * 0.08;
    const hatWidth = brimWidth * 0.7;
    const hatHeight = headRadius * 1.25;
    drawFilledRect(x - brimWidth / 2, brimTop, brimWidth, brimHeight, 'black');
    drawFilledRect(x - hatWidth / 2, brimTop - hatHeight, hatWidth, hatHeight, 'black');
  }

  const torso = (torsoSize) => {
    drawCircle(x, torsoY, radius(torsoSize) + 2, 'black', 3);
    drawFilledCircle(x, torsoY, radius(torsoSize), 'white', 3);
  }

  const arms = (torsoRadius) => {
    let x1 = x + torsoRadius * 0.6;
    let x2 = x + torsoRadius * 2.35;
    drawLine(x1, torsoY - torsoRadius * 0.25, x2, torsoY - torsoRadius * 0.85, 'black', 3);
    x1 = x + torsoRadius * 0.6 * -1;
    x2 = x + torsoRadius * 2.35 * -1;
    drawLine(x1, torsoY - torsoRadius * 0.25, x2, torsoY - torsoRadius * 0.85, 'black', 3);
  }

  const buttons = (torsoRadius) => {
    for (let i = 0; i < 3; i++) {
      drawFilledCircle(x, torsoY - torsoRadius * 0.5 + i * torsoRadius * 0.5, 4, 'black');
    }
  }

  const butt = (buttSize) => {
    drawCircle(x, buttY, radius(buttSize) + 2, 'black', 3);
    drawFilledCircle(x, buttY, radius(buttSize), 'white', 3);
  }

  head(indSize(headP))

  eyes(indSize(headP) / 2)

  nose(indSize(headP) / 2)

  mouth(indSize(headP))

  hat(indSize(headP) / 2)

  torso(indSize(torsoP))

  arms(indSize(torsoP / 2))

  buttons(indSize(torsoP / 2))

  butt(indSize(buttP))
};

background(height * 0.7)

drawPicture(height * 0.9, height * 0.7);
