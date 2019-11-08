// this one is not working yet!!
function gap(num) {
  // convert the number to a binary string
  const binaryString = num.toString(2);

  // a place to store the length of the longest segment
  // initialized to zero
  let longestSegment = 0;

  // a place to store the length of the current longest segment
  let currentLongestSegment = 0;

  // iterate over the binary string
  for (let i = 0; i < binaryString.length; i++) {
    const bit = binaryString[i];
    // if the current value is 1
    if (bit == 1) {
      //check if current longest segment is greater than overall longest segment
      if (currentLongestSegment > longestSegment) {
        // if so, update overall longest segment
        longestSegment = currentLongestSegment;
      }
      // reset current logest segment to 0
      currentLongestSegment = 0;
    } else {
      // if the current value is a 0
      // increment the current longest segment
      currentLongestSegment += 1;
    }
  }
  return longestSegment;
}

console.log(gap(9), 2);
console.log(gap(529), 4);
console.log(gap(20), 1);
console.log(gap(15), 0);
