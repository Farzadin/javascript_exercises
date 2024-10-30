function arrayToList(arr) {
  let list = { head: null, tail: null };

  for (let i = 0; i < arr.length; i++) {
    append(arr[i], list);
  }
  return list;
}

function listToArray(list) {
  let arr = [];
  let current = list.head;

  while (current !== null) {
    arr.push(current.value);
    current = current.pointer;
  }

  return arr;
}

function prepend(element, list) {
  let newNode = { value: element, pointer: list.head };
  list.head = newNode;
}

function append(element, list) {
  let newNode = { value: element, pointer: null };

  if (list.head === null) {
    list.head = newNode;
    list.tail = newNode;
  } else {
    list.tail.pointer = newNode;
    list.tail = newNode;
  }
}

function removeFirst(list) {
  if (list === null) return;
  list.head = list.head.pointer;
  if (list.head === null) {
    list.tail = null;
  }
}

function nth(list, n) {
  let current = list.head;
  if (!current) return undefined;
  else if (n == 0) return current.value;
  return nth({ head: current.pointer }, n - 1);
}

let myList = arrayToList([1, 2, 3]);
console.log(nth(myList, 0));
/*
console.log(myList);
prepend(0, myList);
console.log(myList);
removeFirst(myList);
console.log(myList);
let myArr = listToArray(myList);
console.log(myArr);
*/
