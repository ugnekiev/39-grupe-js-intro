console.clear();

function didziausias(a, b) {
    if (a > b) {
        return a;
    }   else {
        return b;

        }
    
}

console.log(didziausias(1, 2, 3));
console.log(didziausias(2, 1, 3));

function didziausias2(a, b, c) {
    if (a > b && b > c) {return a};
    if (b > c && b > c) {return b};
    return c;
}

console.log(didziausias2(1, 2, 3));
console.log(didziausias2(2, 1, 3));
console.log(didziausias2(2, 1, 4, 3));
console.log(didziausias2(2, 1, 4, 3, 5));

console.log('-----------------REST');

function didziausias3(...numbers) {
    let max = -Infinity;
    for (const n of numbers) {
        if (n > max) max = n;
    }
    return max;
}

console.log(didziausias3(1, 2, 3));
console.log(didziausias3(2, 1, 3));
console.log(didziausias3(2, 1, 4, 3));
console.log(didziausias3(2, 1, 4, 3, 5));

console.log('-----------------PVZ SU PAZYMIU VIDURKIU');

const studentas = (...info) => {
    let suma = 0;
    
    for (let i = 1; i < info.length; i++) {
        suma += info[i];
    }
    
    const vidurkis = suma / (info.length - 1);
    return `${info[0]}: ${vidurkis}.`

}

console.log(studentas('Petras', 6, 7, 8, 9));
console.log(studentas('Maryte', 10, 9, 8, 7, 6, 9, 7, 8));

console.log('-----------------OPTIMIZUOTAS kodas');
const studentas1 = (name, ...marks) => {
    let suma = 0;
    
    for (const m of marks) {
        suma += m;
    }
    const vidurkis = suma / marks.length;
    return `${name}: ${vidurkis}.`
}


console.log(studentas1('Petras', 6, 7, 8, 9));
console.log(studentas1('Maryte', 10, 9, 8, 7, 6, 9, 7, 8));