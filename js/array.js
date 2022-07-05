console.clear()

/* ARRAY 
saras / masyvas / matrica / rinkinys

rekomendacija
-masyve tureti vieno tipo duomenis

*/

const marks = [10, 8, 2, 4, 6]

console.log(marks);

const pirmas = marks[0];
const antras = marks[1];
const trecias = marks[2];
const ketvirtas = marks[3];
const penktas = marks[4];

const suma = pirmas + antras + trecias + ketvirtas + penktas
console.log('suma:', suma);

/*const suma2 = marks[0] + marks[1] + marks[2] + marks[3]
console.log(suma2);
*/

const kiekis = marks.length;
console.log('kiekis;', kiekis);

const vidurkis = suma / kiekis;
console.log('vidurkis:', vidurkis);

console.log('-------------------');
const pazymiai = [8, 9, 4, 5, 6]
console.log(pazymiai)

const first = pazymiai[0];
const second = pazymiai[1];
const third = pazymiai[2];
const fourth = pazymiai[3];
const fifth = pazymiai[4];

const kiekis1 = pazymiai.length;
console.log(kiekis1);

const suma1 = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4]
console.log(suma1);

const vidurkis1 = suma1 / kiekis1;
console.log(vidurkis1);

console.log('-------------------');
const taipIrNe = [true, false, false, true, false, true, false];
console.log(taipIrNe);
console.log(taipIrNe[0]);
console.log(taipIrNe[1]);
console.log(taipIrNe[2]);
console.log(taipIrNe[3]);
console.log(taipIrNe[4]);
console.log(taipIrNe[5]);
console.log(taipIrNe[6]);

console.log('-------------------');
// tokius masyvus rasyti yra neprasminga
const mix = ['u', 'unde', 'undefined', undefined, 2];
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);
console.log(mix[3]);
console.log(mix[4]);

console.log('-------------------');
const people = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(people);
const asmuo1 = people[0];
const asmuo2 = people[1];
const asmuo3 = people[2];
const asmuo4 = people[3];
console.log(asmuo1);
console.log(asmuo2);
console.log(asmuo3);
console.log(asmuo4);
