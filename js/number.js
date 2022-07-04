console.clear()
/*
normalus skaiciai
- sveikieji
- desimtainiai
- teigiami/neigiami

nenormalus skaiciai
- infinity / -infinity
- NaN (not-a-number)

Kintamuju inicijavimas
- const (reiksme negali buti pakeista/default)
- let (leidziame keisti reiksme)
- var (nenaudoti jei nenori tureti problemu)

*/


console.log(5555);

const metai = 2022
console.log(metai);
console.log(2022);

const PI = 3.14
console.log(PI)

const gimimometai = 1984
console.log(gimimometai)

const minus = -77
console.log(minus)

//NAMU DARBAS
/* Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const geguze = 5;
const birzelis = 6;
const liepa = 7;

console.log(geguze);
console.log(birzelis);
console.log(liepa);
console.log(liepa);

// teorija

//  jei noriu kintamajam keisti reiksme - naudojame ne "const" o "let"

// zenklas = yra reiksmes priskyrimo operatorius

let pinigine = 0;
pinigine = 5;
console.log(pinigine);

pinigine = 6;
console.log(pinigine)

pinigine = 20;
console.log(pinigine)

const teigiamaBegalybe = Infinity;
console.log(teigiamaBegalybe);

// kai yra 2 ir daugiau zodziu; jie rasomi be tarpu, pirmasisprasideda didziaja raide

const neigiamaBegalybe = -Infinity;
console.log(neigiamaBegalybe);

// NaN reiksme

const a = 7;
const b = 5;

const suma = a+b;
console.log(a, b, suma);

const skirtumas = a-b;
console.log(a, b, a-b, skirtumas);

const sandauga = a*b;
console.log(a, b, a*b, sandauga);

const dalmuo = a/b;
console.log(a, b, a/b, dalmuo);

const liekana = a % b
console.log(a, b, a%b, liekana);
console.log(5, 2, 5%2);
console.log(8, 2, 8%2);
console.log(10, 3, 10%3);

const x = a**b
console.log(a, b, a**b, x);b
console.log(2, 3, 2**3);
console.log(3, 3, 3**3);

console.clear()

// Susumuoti visus skaičiaus tipo kintamuosius

/* const total = 0;
console.log(total);

total = 2 // 2
console.log(total);

total = 2 // 4
console.log(total);

total = 2 // 6
console.log(total);

total = 2 // 8
console.log(total);
*/

// problema - const neleidzia buti keiciama - reikia let

let total = 0;
console.log(total);

total = total + 2 // 2
console.log(total);

total = total + 2 // 4
console.log(total);

total = total + 2 // 6
console.log(total);

total = total + 2 // 8
console.log(total);

// tai tinka su visai veiksmais  - * / %

// idomesni atvejai
console.log(10 / 0);
console.log(-10 / 0);
console.log(Infinity / 0);
console.log(-Infinity / 0);
console.log(5575 / Infinity);
console.log(-5575 / Infinity);
console.log(-5575 / -Infinity);


console.log("Nesamones: NaN");
console.log(0 / 0);
console.log(-0 / 0);
console.log(Infinity / Infinity);
console.log(-Infinity / Infinity);


