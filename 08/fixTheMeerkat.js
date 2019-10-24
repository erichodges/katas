
// function fixTheMeerkat(arr) {
//   const tail = arr[0];
//   const body = arr[1];
//   const head = arr[2];

//   return [head, body, tail];
// }

// function fixTheMeerkat(arr) {
//   const [tail, body, head] = arr;

//   return [head, body, tail];
// }

// function fixTheMeerkat(arr) { // ['tail', 'body', 'head']
//   const tail = arr.shift();
//   console.log(arr)
//   const head = arr.pop();
//   console.log(arr)
//   arr.unshift(head);
//   console.log(arr)
//   arr.push(tail);
//   console.log(arr)
//   return arr;
// }

function fixTheMeerkat([tail, body, head]) {
  return [head, body, tail];
}




console.log(fixTheMeerkat(['tail', 'body', 'head']), ['head', 'body', 'tail']);