console.clear()
/* STRINGS

Tekstas yra simboliu kratinys / sarasas /motyvas

Teksto iniciavimas:
 - dvigubos kabutes ("")
 - viengubos kabutes ('')
 -apostrofos arba backtick (``)

*/
const name = "Petras";
console.log (name);

const lastName = 'Petraitis';
console.log(lastName);

const sentence = "Labas rytas Lietuva";
console.log(sentence);

const p = "Labas rytas Lietuva, labas rytas labas rytas labas rytas labas rytas labas rytas labas rytas labas rytas labas rytas. Ka tu?";
console.log(p);

const s1 = "vienguba kabute (')";
console.log(s1);

const s2 = 'dviguba kabute (")';
console.log(s2);

//const s12 = "vienguba kabute (') ir dviguba kabute (");
const s12_1 = "vienguba kabute (') ir ";
const s12_2 = 'dviguba kabute (")';
const s12 = s12_1 + s12_2
console.log(s12);

const s13_1 = "vienguba kabute (') ir ";
const s13_2 = 'dviguba kabute (")';
const s13 = "vienguba kabute (') ir " + 'dviguba kabute (")';
console.log(s13);

//naudot \ kai turinyje sutinkame viengubas ar dvigubas kabutes
const s15_1 = "vienguba kabute (') ir ";
const s15_2 = 'dviguba kabute (")';
const s15 = "vienguba kabute(') ir dviguba kabute(\").";
console.log(s15);

console.log('---------------------')

const slash = "Slash (\)";
console.log(slash);
// kai yra vienas \ jo nespausdina, o kai yr antras - reiskiasi kad jis turi buti spausdintinas
const slash1 = 'Slash (\\)';
console.log(slash1);

const slash2 = 'Slash (\\\\)';
console.log(slash2);

// \r\n\ return new line - enter
const enter = 'labas\r\n\
rytas,\r\n\
Lietuva.';
console.log(enter)

//backtik'uose veikia enter klaviaturos mygtukass
const backtickEnter = `Labas 
rytas
Lietuva`;
console.log(backtickEnter);


//Labas, as Krabas Patis.
//Labas, Vaikas Bosas.

const firstName1 = "Krabas";
const lastName1 = "Patis";

const firstName2 = "Vaikas";
const lastName2 = "Bosas";

const labas1_1 = "Labas, as " + firstName1 + " " + lastName1 + ".";
console.log(labas1_1);

const labas2_2 = "labas, as " + firstName2 + " " + lastName2 + ".";
console.log(labas2_2);

console.log('---------------');
// ${} TIK SU BACKTICKAIS
const labas1_b = `labas, as ${firstName1} ${lastName1}.`;
console.log(labas1_b);

const labas2_b = `labas, as ${firstName1} ${lastName2}`;
console.log(labas2_b);

const a = 7;
const b = 5;


console.log(`${a} + ${b} = ${a + b}`);



