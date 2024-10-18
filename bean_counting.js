function countChar(string, char) {
  let count = 0;
  let charString = String(char);
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === charString) count += 1;
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBBS"));
console.log(countChar("kirkhar", "k"));
