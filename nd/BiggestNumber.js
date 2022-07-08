console.clear ();

function bigNum(list) {
    if (!Array.isArray(list)) {
        return 'Pateikta netinkamo tipo reiksme';
        
    }

    if (list.length === 0) {
        return 'Pateiktas sarasas negali buti tuscias';
        
    }

    /*let biggest = 0;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (number > biggest) {
        biggest = number;
    }
}
    */
   let biggest = -Infinity;
   
   for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (typeof number === 'number'
            && isFinite(number)
            && number > biggest) {
            biggest = number;
        }
   }

   if (biggest === -Infinity) {
       return 'Masyve nerasta nei vieno normalaus skaiciaus';
   }

   return biggest;
}

console.log(bigNum('pomidoras'), '->', 'ERORR');
console.log(bigNum(undefined), '->', 'ERORR');
console.log(bigNum(true), '->', 'ERORR');
console.log(bigNum(false), '->', 'ERORR');
console.log(bigNum(null), '->', 'ERORR');
console.log(bigNum([NaN, NaN, NaN]), '->', 'ERORR');
console.log(bigNum([Infinity, Infinity, Infinity]), '->', 'ERORR');


console.log(bigNum([1]), '->', 1);
console.log(bigNum([3]), '->', 3);
console.log(bigNum([1, 2, 3]), '->', 3);

console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([1, 2, 3, NaN]), '->', 3);
console.log(bigNum([1, NaN, 2, 3]), '->', 3);
console.log(bigNum([NaN, 1, 2, 3]), '->', 3);
console.log('--------------');
console.log(bigNum([1, 2, 3, Infinity]), '->', 3);
console.log(bigNum([0, '2']), '->', 0);
console.log(bigNum([0, [3]]), '->', 0);
console.log(bigNum([0, true]), '->', 0);

