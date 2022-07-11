console.clear();

function letters(text, step) {
    if (typeof text !== 'string') {
        return 'Pirmasis kintamasis turi buti tekstas';
        
    }

    if (typeof step !== 'number'
    || !isFinite(step)) {
        return 'Antrasis kintamasis turi buti normalus skaicius';
        
    }

    if (step === 0){
        return 'Antrasis kintamasis turi būti didesnis už nulį'
    }

    if (step > text.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    }

    if (step  % 1 !== 0) {
        return 'Antrasis kintamasis turi būti sveikasis skaicius.'
    }


    let answer = '';

    if (step > 0){
        for (let i = step - 1; i < text.length; i += step) {
        answer += text[i];
    }
    } else {
        for (let i = text.length + step; i >= 0; i += step) {
            answer += text[i];  
        }
    }
    return answer;
    
}
console.log(letters( 1561, 2), '->', 'ERORR');
console.log(letters('abc', 0), '->', 'ERORR');
console.log(letters('abc', 4), '->', 'ERORR');
console.log(letters('abc', 2.5), '->', 'ERORR');
console.log(letters('abc', NaN), '->', 'ERORR');
console.log(letters('abc', []), '->', 'ERORR');
console.log(letters('abc', true), '->', 'ERORR');
console.log(letters('abc', false), '->', 'ERORR');
console.log(letters('abc', undefined), '->', 'ERORR');


console.log(letters('abcdefg', 2), '->', 'bdf');
console.log(letters('abcdefghijkl', 3), '->', 'cfil');


console.log(letters('abcdefghijkl', -1), '->', 'lkjihgfedcba');
console.log(letters('abcdefghijkl', -2), '->', 'kigeca');
console.log(letters('abcdefghijkl', -3), '->', 'jgda');




/*
tekstas = 'abcdefghijkl'
step = -1

 let i = step - 1 ; i < text.length; i += step 

 let i = -1 - 1 ; i < abcdefghijkl; i += -1 

 let i = -2 ; i < 12; i += -1 
 let i = -3 ; i < 12; i += -1 
 let i = -4 ; i < 12; i += -1 
 let i = -5 ; i < 12; i += -1
 let i = -Infinity ; i < 12; i += -1  
*/


 
