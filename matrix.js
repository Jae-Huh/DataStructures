module.exports = {
  getMatrix,
  updateMatrix
}

function getMatrix (n) {
  var arr = []
  for (var i = 0; i < n; i++) {
    var tempArr = []
    for (var j = 0; j < n; j++) {
      tempArr.push(0)
    }
    arr.push(tempArr)
  }
  return arr
}

function updateMatrix (matrix, coords, value) {
  matrix[coords[0]].splice(coords[1], 1, value)
  return matrix
}
