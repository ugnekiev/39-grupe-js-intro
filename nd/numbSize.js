console.clear();

function numbSize(number) {
    if (typeof number !== 'number' || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reiksme'
    }

    const numberAsString = "" + number;
   // let numberSize = numberAsString.length;

   // if (number < 0) {
   //     numberSize --;
   // }
    /*if (numberAsString.includes('-')) {
        numberSize--;
    }

    if (numberAsString.includes('.')) {
        numberSize--;
    }
    */
  // if (number % 1 != 0) {
  //  numberSize --;
    
  // }

  let size = 0;

  for (let i = 0; i < numberAsString.length; i++) {
    const symbol = numberAsString[i];
    switch (symbol) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            size ++;
            break;
    }
  }

    return size;
}

console.log(numbSize(true), '->',  'ERORR');
console.log(numbSize('asd'), '->',  'ERORR');
console.log(numbSize(NaN), '->',  'ERORR');
console.log(numbSize(Infinity), '->', 'ERORR');
console.log(numbSize(), '->', 'ERORR');
console.log(numbSize(null), '->', 'ERORR');

console.log(numbSize(5), '->', 1);
console.log(numbSize(781), '->', 3);
console.log(numbSize(37060123456), '->', 11);

console.log(numbSize(-5), '->', 1);
console.log(numbSize(-781), '->', 3);
console.log(numbSize(-37060123456), '->', 11);

console.log(numbSize(3.14), '->', 3);
console.log(numbSize(-3.14), '->', 3);

