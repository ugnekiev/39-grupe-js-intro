console.clear();

function numbSize(number) {
    if (typeof number !== 'number' || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reiksme'
    }

   
    const numberAsString = "" + number;
    let numberSize = numberAsString.length;

    for (let i = 0; i < numberAsString.length; i++) {
        const symbol = numberAsString[i];
        
    }
    return numberSize;
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


console.log(numbSize(5555555555555555555555555555555555555555555555555555555555555555555), '->', 67);

