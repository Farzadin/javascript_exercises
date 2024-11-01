/* MY SOLUTION
function isEven(n) {
  if (n == 0) {
    return true; 
  } else if (n == 1) {
    return false;
  } else if (n < 0) {
    return isEven(n + 2);
  } else {
    return isEven(n - 2);
  }
}
*/

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

function factorial(n) {
  if (n == 1) {
    return true;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5))

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
