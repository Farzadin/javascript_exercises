/*
 * fn = loop
 * input: a value, a test function, an update function, a body function
 *
 * steps:
 *  1: run test function on current loop values;
 *  (if) test function returns false stop.
 *  2: call the body function, giving it the current value.
 *  3: call the update function to create new value and start over from the
 *  beginning.
 *
 * output: provide something like a for loop statement


for (3; (n) => n > 0; (n) => n - 1) {
  action(n)
}
  for (let i = value; test(i); i = update(i)) {
    action(i);
}
 */

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);
// → 3
// → 2
// → 1
