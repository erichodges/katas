// function flatten(array) {
//   let flattened = [];

//   for (let i = 0; i < array.length; i++) {
//     const currentValue = array[i];

//     if (Array.isArray(currentValue)) {
//       for (let j = 0; j < currentValue.length; j++) {
//         const innerValue = currenValue[j];

//         flattened.push(innerValue);
//       }
//     } else {
//       flattened.push(currentValue);
//     }
//   }
//   return flattened;
// }

// function flatten(array) {
//   let flattened = [];
//   array.forEach(currentValue => {
//     if (Array.isArray(currentValue)) {
//       currentValue.forEach(innerValue => {
//         flattened.push(innerValue);
//       });
//     } else {
//       flattened.push(currentValue);
//     }
//   });
//   return flattened;
// }

// function flatten(array) {
//   let flattened = [];
//   array.forEach(currentValue => {
//     if (Array.isArray(currentValue)) {
//       flattened = [...flattened, ...currentValue];
//     } else {
//       flattened.push(currentValue);
//     }
//   });
//   return flattened;
// }

// function flatten(array) {
//   let flattened = [];
//   array.forEach(currentValue => {
//     if (Array.isArray(currentValue)) {
//       flattened = [...flattened, ...currentValue];
//     } else {
//       flattened = [...flattened, currentValue];
//     }
//   });
//   return flattened;
// }

// function flatten(array) {
//   return array.reduce((flattened, currentValue) => {
//     if (Array.isArray(currentValue)) {
//       return [...flattened, ...currentValue];
//     }
//     flattened.push(currentValue);
//     return flattened;
//   }, []);
// }

console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(
  flatten([
    [1, 2, 3],
    ["a", "b", "c"],
    [1, 2, 3]
  ]).toString() === [1, 2, 3, "a", "b", "c", 1, 2, 3].toString()
);
console.log(
  flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]).toString() ===
    [3, 4, 5, [9, 9, 9], "a,b,c"].toString()
);
console.log(
  JSON.stringify(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])) ===
    JSON.stringify([[3], [4], [5], 9, 9, 8, [1, 2, 3]])
);
