let userbatch = 1000000

import { setKey, algorithm } from './algorithm.js';

////////////////////////////////////////////////////////////////////////////////

const generate = (element) => {
  element.onchange = (e) => {
    if (e.target.value === '') {
      console.log('value is empty! at ' + e.target)
    } else {
      const p = document.getElementById('list')
      let answer = algorithm(e.target.value, userbatch)
      console.log(e.target.value)
      for (let i = 0; i < answer.length; i++) {
        let list = document.createElement('li')
        list.append(document.createTextNode(answer[i].phrase))
        p.append(list)
      }
      document.getElementById('clicks').append(p);
    };
  }
}


const clearGenerations = (e) => {
  document.getElementById('list').textContent = ''
  console.log('generation cleared')
}

// this bit isnt working, not sure why

document.querySelector('#generation').forEach(eg => eg.onchange = (e) => generate(e))

document.querySelector('#clear').onclick = clearGenerations;

document.querySelector('#key').forEach(ef => ef.onchange = (e) => setKey(e.target.value))

document.querySelector('#batch').forEach(el => el.onchange = (e) => userbatch = e.target.value)