console.clear();
const pirmas = 7;
const antras = 5;

function suma(a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${suma(pirmas, antras)}`);


// nuo FUNCTION DECLARATION pereisim prie => ARROW FUNCTION
//anonimine funkcija
const atimtis = function (a, b) {
    return a - b;
}

//arrow funkcija
const daugyba = (a, b) => {
    return a * b;
}

// arrow funkcija
// jeigu logikos bloke yra tik viena salyga (statment)
// nerasome {} ir return
const dalyba = (a, b) => a / b;

// jeigu logikos bloke yra tik 1 parametras
// nerasome ()
const kvadratu = (a) => a ** 2

console.log(`${pirmas} - ${antras} = ${atimtis(pirmas, antras)}`);
console.log(`${88} - ${66} = ${atimtis(88, 66)}`);
console.log(`${pirmas} * ${antras} = ${daugyba(pirmas, antras)}`);
console.log(`${pirmas} / ${antras} = ${dalyba(pirmas, antras)}`);
console.log(`${pirmas} ** 2 = ${kvadratu(pirmas)}`);
