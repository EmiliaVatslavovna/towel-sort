module.exports = function towelSort(matrix) {
  let array = [];
  if (matrix === undefined) { return array; } // if no params passed
  
  let rev = matrix.length;
  for (let i = 1; i < rev; i = i + 2) {
    matrix[i].reverse();
  }
  array = matrix.flat(Infinity);
  return array;
}
