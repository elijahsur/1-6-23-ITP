
import { algorithm } from './algorithm.js';

////////////////////////////////////////////////////////////////////////////////

let cityCount = 10;
let boardSize = 500
let batchAmount = 500;
let totalGenerations = 500;
let bruteForceValue = false;

const setValue = (e) => {
    if (e.target.value === '') {
      console.log('value is empty! at ' + e.target)
    } else {
      console.log(`Seting value to ${e.target.value}, at ` + e.target);
      setKey(e.target.value)
    }
  };

document.querySelectorAll('#cities, #boardSize, #batchSize, #totGenerations').forEach(el => el.onchange = (e) => setValue(e))
//document.querySelectorAll('.foo').forEach(el => el.onchange = (e) => setValue(e))
document.querySelectorAll('#bruteForce').onclick = bruteForceValue = !bruteForceValue