
function fixTheMeerkat(arr) {
  const tail = arr[0];
  const body = arr[1];
  const head = arr[2];

  return [head, body, tail];
}

console.log(fixTheMeerkat(['tail', 'body', 'head']), ['head', 'body', 'tail']);