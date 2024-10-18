function reverseArrayInPlace(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }

  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
