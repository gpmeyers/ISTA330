/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function (n) {
  if (n <= 0) {
    return [];
  }
  if (n == 1) {
    return [[1]];
  }
  if (n == 2) {
    return [[1], [1, 1]];
  }

  let output = [[1], [1, 1]];
  let curr = [];

  for (let i = 2; i < n; i++) {
    curr.push(1);

    for (let j = 1; j < output[i - 1].length; j++) {
      curr.push(output[i - 1][j] + output[i - 1][j - 1]);
    }

    curr.push(1);
    output.push(curr);

    curr = [];
  }

  return output;
};