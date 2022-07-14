console.clear();

const num1 = [1, 2, 3];
const num2 = [4, 5, 6, 7];
const num3 = [8, 9];

const num1_copy = num1;
console.log(num1);
console.log(num1_copy);

num1.push(77);
console.log(num1);
console.log(num1_copy);

num1_copy.push(88);
console.log(num1_copy);
console.log(num1);

console.log('----------------');
const num2_copy = [...num2];
console.log(num2_copy);
console.log(num2);

num2_copy.push(33);
console.log(num2_copy);
console.log(num2);

console.log('----------------');
const obj1 = {
    a: 1,
    b: 2,
}

const obj1_copy = obj1;
console.log(obj1);
console.log(obj1_copy);

obj1.c = 3;
console.log(obj1);
console.log(obj1_copy);

obj1_copy.d = 4;
console.log(obj1);
console.log(obj1_copy);

console.log('----------------');
const obj2 = {
    a: 1,
    b: 2,
}

const obj2_copy = {...obj2};
console.log(obj2);
console.log(obj2_copy);

obj2.c = 3;
console.log(obj2);
console.log(obj2_copy);

obj2_copy.d = 4;
console.log(obj2);
console.log(obj2_copy);

console.log('----------------');

const str1 = ['a', 'b', 'c'];
const str2 = ['d', 'e', 'f'];
const str3 = ['g', 'h', 'i'];

const str12 = [...str1, 111, ...str2];
console.log(str12);

const str13 = [...str1, ...str3];
console.log(str13);

const str23 = [...str2,'23', 'gg', ...str3];
console.log(str23);

console.log('----------------');

const person = {
    name: 'Petras',
    age: 99,
    same: 1111,
}

const status = {
    isMarried: true,
    hasCar: false,
    same: 2222,
}

const Petras = {...person, ...status};
const Petras2 = {...status, ...person};

console.log(Petras);
console.log(Object.keys(Petras));

console.log(Petras2);
