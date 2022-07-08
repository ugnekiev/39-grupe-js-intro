console.clear();

const Petras = [2, 3, 4, 5];
const Maryte = [4, 5, 6, 7, 8];
const Jonas = [10, 9, 8];
const Ona = [1, 10, 2, 9, 3, 8, 4, 7];
/*
let PetroSuma = 0;
for (let i = 0; i < Petras.length; i++) {
    PetroSuma += Petras[i];
}
const PetroVidurkis = PetroSuma / Petras.length;
console.log(`Petras: ${PetroVidurkis} vidurkis.`);
//
let MarytesSuma = 0;
for (let i = 0; i < Maryte.length; i++) {
    MarytesSuma += Maryte[i];
}
const MarytesVidurkis = MarytesSuma / Maryte.length;
console.log(`Maryte: ${MarytesVidurkis} vidurkis.`);
//
let JonoSuma = 0;
for (let i = 0; i < Jonas.length; i++) {
    JonoSuma += Jonas[i];
}
const JonoVidurkis = JonoSuma / Jonas.length;
console.log(`Jonas: ${JonoVidurkis} vidurkis.`);
//
let OnosSuma = 0;
for (let i = 0; i < Ona.length; i++) {
    OnosSuma += Ona[i];
}
const OnosVidurkis = OnosSuma / Ona.length;
console.log(`Ona: ${OnosVidurkis} vidurkis.`);
*/

function pazymiuVidurkis (pazymiai) {
    let suma = 0;
    for (let i = 0; i < pazymiai.length; i++) {
        suma += pazymiai[i];
    }
    return suma / pazymiai.length;
}

console.log(pazymiuVidurkis (Maryte));
console.log(pazymiuVidurkis (Jonas));
console.log(pazymiuVidurkis (Petras));
console.log(pazymiuVidurkis (Ona));

console.log(`-----------------`);

function suma(a, b) {
    return a + b;
}

console.log(`7 + 5 = ${suma (7, 5)}`);
console.log(`34 + 75 = ${suma (34, 75)}`);
console.log(`56 + 32 = ${suma (56, 32)}`);

console.log(`-----------------`);

function labas(name) {
    return `labas, as ${name}!`;
}

console.log(labas('Petras'));
console.log(labas('Maryte'));

console.log(`-----------------`);

function adresas(gatve) {
    return `mano gatve yra - ${gatve}.`;
}

console.log(adresas ('Birutes'));
console.log(adresas ('Vytauto'));
console.log(adresas ('Palangos'));
console.log(adresas ('Malonioji'));