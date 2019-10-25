// function vaporcode(str) {
//   let output =  "";

//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i];
    
//     if (letter !== ' ') {
//       const uppercaseLetter = letter.toUpperCase();
//       output += uppercaseLetter + '  ';
//     }

       
//   }
//   console.log(output.trim())
//   return output.trim();
// }

function vaporcode(str) {
  return str
    .toUpperCase()
    .split('')
    .filter(letter => letter !== ' ')
    .join('  ');
}


console.log(
  vaporcode('Let \'s go to the movies') ==
  'L  E  T  \'  S  G  O  T  O  T  H  E  M  O  V  I  E  S'  
  );


  //   'L  E  T \' S  G  O  T  O  T  H  E  M  O  V  I  E  S'