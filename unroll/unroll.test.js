const unroll = require('./unroll');

const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
console.log(unroll(square)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];
console.log(unroll(smallerSquare)); // ["a", "b", "c", "f", "i", "h", "g", "d", "e"]


