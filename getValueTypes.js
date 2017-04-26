module.exports = function getValueTypes (obj) {
  var arr = []
  for (var key in obj) {
    arr.push(typeof obj[key])
  }
  return arr
}
