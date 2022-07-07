console.clear();

const marks = [10, 8, 2, 6, 5, 7, 10, 2];

let suma = 0;
//let index = 0; 


for (let i = 0; i < marks.length; i++) {
    suma+= marks [i];
}

for (let i = 0; i < 5; i++) {
    console.log(i);
    
}
console.log("--------------------");
for (let i = 0; i < 20; i+=3) {
    console.log(i);
    
}


/*
for (let i = 0; i < marks.length; i++) {
    suma+= marks [index++];
}
*/

const vidurkis = suma / marks.length;

console.log("vidurkis", vidurkis);
console.log("suma", suma);


/*3
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
*/

/*2
suma += marks[index];
index += 1;

suma += marks[index];
index += 1;

suma += marks[index];
index += 1;

suma += marks[index];
index += 1;

suma += marks[index];
index += 1;

suma += marks[index];
index += 1;
*/

/* 1 
suma += marks[1];
suma += marks[2];
suma += marks[3];
suma += marks[4];
suma += marks[5];
*/

const people = ['Petras', 'Maryte', 'Jonas', 'Ona'];

for (let i = 0; i < people.length; i++) {
    const personName = people[i];
    const labas = 'labas, as ' + personName + '!';  
    //console.log(personName);
    console.log(labas);
}

const paraidziui = 'Paraidziui';
for (i=0;i<paraidziui.length; i++) {
    const simbolis = paraidziui [i];
    console.log(simbolis);

}

const labas = 'labas rytas Lietuva!';
let labasNaujas = '';
for (i=0; i < labas.length; i++){
    const simbolis1 = labas[i];
    labasNaujas += simbolis1;
    console.log(simbolis1, labasNaujas);

}
