// function maps(numbers) {
//   const doubled = [];

//   // iterate over the array of numbers
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     // double the values
//     const doubledNumber = number * 2;
//     doubled.push(doubledNumber);
//   }
//   // return doubled array
//   return doubled;
// }

///////   For of version
// function maps(numbers) {
//   const doubled = [];

//   // iterate over the array of numbers
//   for (const number of numbers) {
//     // double the values
//     const doubledNumber = number * 2;
//     doubled.push(doubledNumber);
//   }
//   // return doubled array
//   return doubled;
// }

/////   For in version
// function maps(numbers) {
//   const doubled = [];

//   // iterate over the array of numbers
//   for (const i in numbers) {
//     // double the values
//     const number = numbers[i];
//     const doubledNumber = number * 2;
//     doubled.push(doubledNumber);
//   }
//   // return doubled array
//   return doubled;
// }

///////   For Each version
// function maps(numbers) {
//   const doubled = [];

//   // iterate over the array of numbers
//   numbers.forEach(number => {
//     const doubledNumber = number * 2;
//     doubled.push(doubledNumber);
//   });
//   // return doubled array
//   return doubled;
// }

/////   Map versions
// function maps(numbers) {
//   const doubled = numbers.map(number => {
//     const doubledNumber = number * 2;
//     return doubledNumber;
//   });
//   return doubled;
// }

// function maps(numbers) {
//   return numbers.map(number => {
//     const doubledNumber = number * 2;
//     return doubledNumber;
//   });
// }

// function maps(numbers) {
//   return numbers.map(number => {
//     return number * 2;
//   });
// }

// function maps(numbers) {
//     return numbers.map((number) => number * 2);
// }

// function maps(numbers) {
//     return numbers.map(number => number * 2);
// }

// function maps(n) {
//     return n.map(n => n * 2);
// }

console.log(maps([1, 2, 3]), [2, 4, 6]);
