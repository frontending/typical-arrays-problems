
exports.min = function min (array) {
  if (array === undefined || array[0] === undefined) {
    return 0
  }
  return Math.min(...array)
}

exports.max = function max (array) {
  if (array === undefined || array[0] === undefined) {
    return 0
  }
  return Math.max(...array)
}

exports.avg = function avg (array) {
  if (array === undefined || array[0] === undefined) {
    return 0
  }
  let sum = 0
  for (let el of array) {
    sum += el
  }
  return sum / array.length
}
