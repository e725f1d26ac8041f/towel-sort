
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.map((item, index) => index % 2 ? item.reverse() : item).flat();
}
