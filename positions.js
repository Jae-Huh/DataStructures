module.exports = {
  getFirst,
  getLast
}

function getFirst (arr) {
  return arr.shift()
}

function getLast (arr) {
  return arr.pop()
}
