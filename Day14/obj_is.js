console.log(Object.is(5, 5));

console.log(Object.is('10', 10));

console.log(Object.is(NaN, NaN));

console.log(Object.is(-20, 20));

const obj = {};
console.log(Object.is(obj, {}));

