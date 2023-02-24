let userbatch = 1000000

import { setKey, algorithm } from './algorithm.js';

////////////////////////////////////////////////////////////////////////////////

const showResults = (e) => {
  const p = document.getElementById('list')
  let answer = algorithm(e.target.value, userbatch)
  console.log(e.target.value)
  if (e.target.value !== '') {
    for (let i = 0; i < answer.length; i++) {
      let list = document.createElement('li')
      list.append(document.createTextNode(answer[i].phrase))
      p.append(list)
    }
    document.getElementById('clicks').append(p);
  } else {
    console.log('value is empty! at ' + e.target)
  }
};

const setBatch = (e) => {
  userbatch = e.target.value;
  console.log(`Seting userbatch to ${e.target.value}`);
};

const resetKey = (e) => {
  if (e.target.value === '') {
    console.log('value is empty! at ' + e.target)
  } else {
    console.log(`Seting key to ${e.target.value}`);
    setKey(e.target.value)
  }
};

const clearGenerations = (e) => {
  document.getElementById('list').textContent = ''
  console.log('generation cleared')
};

document.querySelector('#generation').onchange = showResults;
document.querySelector('#batch').onchange = setBatch;
document.querySelector('#key').onchange = resetKey;
document.querySelector('#clear').onclick = clearGenerations;