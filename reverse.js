function reverseArray(arr) {
  let reversedA = [];
  for (let i = arr.length - 1; i >= 0; i--) reversedA.push(arr[i]);
  return reversedA;
}

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
