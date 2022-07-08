console.clear ();

function daugyba(pirmasSkaicius, antrasSkaicius) {
    if (typeof pirmasSkaicius !== "number") {
        return 'ERORR - neduotas pirmas skaicius'
    }

    if (typeof antrasSkaicius !== "number") {
        return 'ERORR - neduotas antras skaicius'
    }

    if (pirmasSkaicius === Infinity 
        || pirmasSkaicius === -Infinity
        || "" + pirmasSkaicius === "NaN") {
        return 'ERORR - pirmas parametras turi buti normalus skaicius'
    }

    if (!isFinite(antrasSkaicius)) {
        return 'ERORR - antras parametras turi buti normalus skaicius'
    }
    

    const ats = pirmasSkaicius * antrasSkaicius;
    return ats;
}
console.log(daugyba());
console.log(daugyba(8));
console.log(daugyba('labas' * 8));
console.log(daugyba(8 * 'labas'));
console.log(daugyba(Infinity, 8));
console.log(daugyba(2, Infinity));
console.log(daugyba(-Infinity, 8));
console.log(daugyba(2, -Infinity));
console.log(daugyba(2, NaN));
console.log(daugyba(NaN, -5));

console.log(daugyba(2, 2));
console.log(daugyba(45, 3));
console.log(daugyba(-22, 3));
console.log(daugyba(2, 3.5));
console.log(daugyba(2, 0));
