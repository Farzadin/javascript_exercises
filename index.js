let myArray = [1, 2, 3, 4, 5];

function simpleSearch(arr, item) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === item) return i;
  }
  return null;
}

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + high / 2);
    let guess = arr[mid];
    if (guess == item) return mid;
    if (guess < item) low = mid + 1;
    if (guess > item) high = mid - 1;
  }

  return null;
}

console.log(simpleSearch(myArray, 2));
console.log(binarySearch(myArray, 2));
