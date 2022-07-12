console.clear();

console.log('########### FOR');
const numbers = [11, 22, 33, 44];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(`${i}) ${number}`);
}

console.log('########### FOR - OF');
let iOf = 0;
for (const number of numbers) {
    console.log(`${iOf++}) ${number}`);
}

console.log('########### WHILE');
let iWhile = 0;
while (iWhile < numbers.length) {
    const number = numbers[iWhile];
    console.log(`${iWhile++}) ${number}`);

}

console.log('########### DO - WHILE');
let iDoWhile = 0;
do {
    const number = numbers[iDoWhile];
    console.log(`${iDoWhile++}) ${number}`);

} while (iDoWhile < numbers.length);

console.log('########### FOREACH');
//eiti per kiekviena
numbers.forEach(function(number, i, arr) {
    console.log(`${i}) ${number}`, arr);
});

console.log('########### FOREACH + function');
function forEachCallBack(number, i, arr) {
    console.log(`${i}) ${number}`, arr);
}
numbers.forEach(forEachCallBack);

console.log('########### FOREACH + function + Arrow');
const forEachCallBackArrow = (number, i) => console.log(`${i}) ${number}`);

numbers.forEach(forEachCallBackArrow);

//grazina nauja masyva su modifikuotais duomenimis
console.log('########### MAP');
console.log('--------numbers');
const doubleNumbers = numbers.map(n => n * 2);

//  s yra 'string' sutrumpinimass
console.log(doubleNumbers);
console.log('--------strings');
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const firstNameLetters = names.map(s => s[0]);
console.log(firstNameLetters);

//kitas budas su FOR
const firstNameLettersFor = [];
for (let  i= 0; i < names.length; i++) {
    const name = names[i];
    firstNameLettersFor.push(name[0])
    if (i >= 1) {
        break;
    }
}
console.log(firstNameLettersFor)

console.log('########### FILTER');
console.log('--------numbers');
//grazina nauja masyva su atfiltruotais (tais,
// kuriu tau reikia) duomenimis
const oddNumbers = numbers.filter(function (number){
    return number % 2 !== 0;
});
const evenNumbers = numbers.filter(function (number){
    return number % 2 === 0;
});

const evenNumbersArrow = numbers.filter(n => n % 2 === 0);
;


console.log(numbers);
console.log(oddNumbers);
console.log(evenNumbers);
console.log(evenNumbersArrow);


//rodykline funkcija
() => {

}


