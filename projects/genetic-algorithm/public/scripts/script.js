////////////////////////////////////////////////////////////////////////////////
// Genetic Algorithm Code
let key = prompt('enter the possible characters the algorithm can use','abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ.,!?"1234567890#')

// constructs a random phrase, with "length" as the length of the string
const randomPhrase = (length) => {
  let generation = ''
  for (let i = 0; i < length; i++) {
    generation = generation + key[Math.floor(Math.random() * key.length)]
  }
  return generation
}
// creates the first batch of random strings
const firstbatch = (text, batchlength) => {
  let batcharray = []
  for (let i = 0; i < batchlength; i++) {
    let phrase = randomPhrase(text.length)
    batcharray.push({ phrase: phrase, fitness: fitness(phrase, text) });
  }
  return batcharray
}
// judges the fitness of a group of strings
const fitness = (dna, text) => {
  let fitness = 0
  for (let i = 0; i < text.length; i++) {
    if (dna[i] === text[i]) {
      fitness++
    }
  }
  return fitness / text.length
}
// ranks the fitness of all strings, then returns the top 25% of the highest fitness
const top25 = (batch) => {
  batch.sort((a, b) => a.fitness - b.fitness)
  return batch.slice(Math.floor(batch.length * (3 / 4)), batch.length)
}
// combines two strings next to each other to create a child, randomly mutates
const evolve = (currentBatch, i, string) => {
  let randomPlace = random(string.length)
  let phrase = currentBatch[i].phrase.slice(0, randomPlace) + currentBatch[i + 1].phrase.substring(randomPlace, currentBatch[i + 1].phrase.length)
  if (Math.random() < 1 / 3) {
    phrase.replace(phrase[random(phrase.length)], key[random(key.length)])
  }
  return phrase
}
// simple random function for the algorithm function
const random = (upto) => {
  return Math.floor(Math.random() * upto)
}

let algorithm = (string, batchlength) => {
  let done = false
  let batchHistory = []
  let currentBatch = top25(firstbatch(string, batchlength))
  while (done === false) {
    batchHistory.push(currentBatch[currentBatch.length - 1])
    for (let i = 0; i < batchlength; i++) {
      let phrase = evolve(currentBatch, i, string)
      currentBatch.push({ phrase: phrase, fitness: fitness(phrase, string) })
    }
    currentBatch = top25(currentBatch)
    if (currentBatch[currentBatch.length - 1].fitness === 1) {
      batchHistory.push(currentBatch[currentBatch.length - 1])
      return batchHistory
    } else {
    }
  }
}

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

