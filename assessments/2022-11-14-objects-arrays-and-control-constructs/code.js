// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) {
    return e1
  } else {
    return e2
  }
};

const isSamePoint = (p1, p2) => {
  if (p1.x = p2.x) {
    if (p1.y = p2.y) {
      return true
    }
  } else {
    return false
  }
};

const totalWithTip = (bill, tipPercentage) => {
  return { subtotal: bill.subtotal, tip: bill.subtotal * tipPercentage, total: bill.subtotal + bill.subtotal * tipPercentage }
};

const isWinner = (player) => {
  if (player.score > 100) {
    return true
  } else {
    return false
  }
};

const updateWins = (players) => {
  for (i = 0; i < players.length; i++) {
    if (players[i].score > 100) {
      players[i].wins = players[i].wins + 1
    }
  }
};

const bigWinners = (players) => {
  let bigWins = []
  for (i = 0; i < players.length; i++) {
    if (players[i].wins > 10) {
      bigWins.push(players[i])
    }
  }
  return bigWins
};

const fillTimesTable = (table) => {
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      table[i][j] = (i-1)*(j-1)
    }
  }
  return table
};


const sums = (n) => {
  let array = []
  let before = 0
  for (let i = 0; i < n + 1; i++) {
    array.push(i + before)
    before = before + i
  }
  return array
};

const rule110 = (cells) => {
};

