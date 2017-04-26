module.exports = function find (arr, propertiesObj) {
  var key = Object.keys(propertiesObj)[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key]=== propertiesObj[key]) {
      return arr[i]
    }
  }
}
