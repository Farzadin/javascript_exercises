function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    let obj = { value: arr[i], pointer: list };
    list = obj;
  }
  return list;
}

function listToArray(list) {
  let arr = [];

  for (const key in list) {
    if (key === "value") arr.push(list[key]);

    if (typeof list[key] === "object" && list[key] !== null) {
      listToArray(list[key]);
    }
  }

  return arr;
}

let myList = arrayToList([1, 2, 3]);
let myArr = listToArray(myList);
console.log(myList);
console.log(myArr);
