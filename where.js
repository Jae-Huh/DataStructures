module.exports = function where (arr, propertiesObj) {
  var key0 = Object.keys(propertiesObj)[0]
  var key1 = Object.keys(propertiesObj)[1]
  var ans = []

  for (var i = 0; i < arr.length; i++) {
    if (Object.keys(propertiesObj).length > 1) {
      if (arr[i][key0] === propertiesObj[key0] && arr[i][key1] === propertiesObj[key1]) {
        ans.push(arr[i])
      }
    } else if (arr[i][key0] === propertiesObj[key0]) {
      ans.push(arr[i])
    }
  }
  return ans
}
