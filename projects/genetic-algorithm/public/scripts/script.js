
let userbatch = 1000000

import { setKey, algorithm } from './algorithm.js';

////////////////////////////////////////////////////////////////////////////////

const addOnChange = (element) => {
  element.onchange = (e) => {
    if (e.target.value === '') {
      console.log('value is empty! at ' + e.target)
    } else {
      if (e.target.getAttribute('id') === 'generation') {
        const p = document.getElementById('list')
        let answer = algorithm(e.target.value, userbatch)
        console.log(e.target.value)
        for (let i = 0; i < answer.length; i++) {
          let list = document.createElement('li')
          list.append(document.createTextNode(answer[i].phrase))
          p.append(list)
        }
        document.getElementById('clicks').append(p);
      } else {
        if (e.target.getAttribute('id') === 'batch') {
          userbatch = e.target.value
        } else {
          setKey(e.target.value)
        }
      }
    }
  };
}
const clearGenerations = (e) => {
  document.getElementById('list').textContent = ''
  console.log('generation cleared')
}

document.querySelectorAll('input').forEach(addOnChange);
document.querySelector('#cg').onclick = clearGenerations;

