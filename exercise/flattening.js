let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays) {
  return arrays.reduce((previous, current) => {
    return previous.concat(current);
  });
}

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
