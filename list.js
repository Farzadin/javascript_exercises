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

function nth(list, number) {
  function recursive(count, current) {
    if (current === null) return undefined;
    if (count === number) return current.value;
    return recursive(count + 1, current.pointer);
  }
  return recursive(0, list.head);
}

let myList = arrayToList([1, 2, 3]);
console.log(nth(myList, 2));
/*
console.log(myList);
prepend(0, myList);
console.log(myList);
removeFirst(myList);
console.log(myList);
let myArr = listToArray(myList);
console.log(myArr);
*/
