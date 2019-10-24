
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

function fixTheMeerkat(arr) {
  const tail = arr.shift();
  const head = arr.pop();
  arr.unshift(head);
  arr.push(tail);
  return arr;
}






console.log(fixTheMeerkat(['tail', 'body', 'head']), ['head', 'body', 'tail']);