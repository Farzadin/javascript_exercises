/*
 * MY SOLUTION
for (let number = 1; number <= 100; number += 1) {
    switch (true) {
        case number % 3 === 0 && number % 5 === 0:
            console.log('fizzbuzz')
            break;
        case number % 3 === 0:
            console.log('fizz');
            break;
        case number % 5 === 0:
            console.log('buzz')
            break;
        default:
            console.log(number);
            break;
    }
}
*/

// books solution
for (let n = 1; n <= 100; n += 1) {
  let output = "";
  if (n % 3 === 0) output += "fizz";
  if (n % 5 === 0) output += "buzz";
  console.log(output || n);
}
