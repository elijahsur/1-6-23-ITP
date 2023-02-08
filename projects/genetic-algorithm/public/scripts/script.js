import { setKey, algorithm, key } from './algorithm.js';

const defaultKey = key;

setKey(prompt('enter the possible characters the algorithm can use', key));

////////////////////////////////////////////////////////////////////////////////
// This function is an event handler. (Similar to the functions we used with
// registerOnclick in some of our old environments.)

const recordClick = (e) => {
  // Create a paragraph element.
  let userstring = prompt('enter string to generate to')
  let userbatch = prompt('enter amount per batch', 1000000)
  const p = document.createElement('ol');
  let answer = algorithm(userstring, userbatch)
  for (let i = 0; i < answer.length; i++) {
    let list = document.createElement('li')
    list.append(document.createTextNode(answer[i].phrase))
    p.append(list)
  }
  // Add the paragraph to the body of the document
  document.getElementById('clicks').append(p);
};

////////////////////////////////////////////////////////////////////////////////
// Add something to every existing paragraph.

document.querySelectorAll('p').forEach((p) => {
  // Create a bold element.
  const b = document.createElement('b');

  // Create some text and add it to the bold element.
  b.append(document.createTextNode('click me to generate!'));

  // Register the recordClick function to handle when the bold element is
  // clicked.
  b.onclick = recordClick;

  // Append some text to the current paragraph.
  p.append(document.createTextNode(' '));

  // And finally append the bold element to the paragraph.
  p.append(b);
});

