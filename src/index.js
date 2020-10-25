module.exports = function towelSort (matrix) {
  let out = [];
  for (let i in matrix){
if (i % 2){
  out = out.concat(matrix[i].slice().reverse());
}
else{
  out = out.concat(matrix[i]);
}
  }
  return out;
}

let matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ]