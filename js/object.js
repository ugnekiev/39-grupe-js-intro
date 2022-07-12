console.clear();
/*
// info pateikimas
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const ages = [99, 66, 77, 45]
const isMarried = [true, false, false, true];

// DVIMATIS MASYVAS
const people = [
    ['Petras', 99, true],
    ['Maryte', 66, false, ['Juozas']],
    ['Jonas', 77, false, ['Aldona', 'Gabrielius']],
    ['Ona', 45, true],
];
const personIndex = 1;

const personName = people[personIndex][0];
const personAge = people[personIndex][1];
const personIsMarried = people[personIndex][2];
const personChildren = people[personIndex][3];

console.log(personName, personAge, personIsMarried);
console.log(personChildren);
*/

// OBJECT

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
}

console.log(person);

const name = person['name'];
const age = person['age'];
const isMarried = person['isMarried'];

console.log(name);
console.log(age);
console.log(isMarried);

const name2 = person.name;
const age2 = person.age;
const isMarried2 = person.age;

console.log(name2);
console.log(age2);
console.log(isMarried2);

console.log('---------------');

const students = [
    {
        name: 'Petras',
        age: 99,
    },
    {
        name: 'Maryte',
        age: 66,
    },
    {
        name: 'Jonas',
        age: 45,
    },
    {
        name: 'Ona',
        age: 35,
    },

]
console.log(students);

//Sveiki, as [vardas] ir man [amzius] metu.
for (const student of students) {
    //console.log(student);
    const labas = `Sveiki, as ${student.name} ir man ${student.age} metu.`;
    console.log(labas);
}
console.log('---------------');

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const labas = `Sveiki, as ${student.name} ir man ${student.age} metu.`;
    console.log(labas);
}

console.clear();

const zmogus = {
    akiuSpalva: 'red',
    profesija: 'programeris',
    ugis: 200,
    galva: true,
    arklys: false,
}
console.log(zmogus);
//ka nori suzinoti vartotojas
const interesas = 'arklys';

console.log(`${interesas}: ${zmogus[interesas]}`);

zmogus.drabuziai = 'geri drabuziai 🥋'
console.log(zmogus);

zmogus.masina = 'elektrine'
console.log(zmogus);

console.log('zmogaus objekta sudarantys ranktazodziai:');
const zmogusKeys = Object.keys(zmogus);
console.log(zmogusKeys);

console.log('---------------');

console.log(Object.keys({}));
console.log(Object.keys({a: 1}));
console.log(Object.keys({a: 1, b: 2}));

const uodegos = ['neturi', 'trumpa', 'riesta', 'ilga'];
const gyvunas = {
    rusis: 'kate',
    kraujas: 'saltas',
    spalva: 'geltonas',
    liezuvis: 20,
    liezuvioMatavimoVnt: 'cm',
    uodega: uodegos[2],
}

const gyvunasKeys = Object.keys(gyvunas);
console.log('---------------');
for (key of gyvunasKeys) {
    console.log(`${key}: ${gyvunas[key]}`);
}

console.log('---------------');
for (key of Object.keys(gyvunas)) {
    console.log(`${key}: ${gyvunas[key]}`);
}

console.log('---------------');
for (const key in gyvunas) {
    console.log(`${key}: ${gyvunas[key]}`);
}
