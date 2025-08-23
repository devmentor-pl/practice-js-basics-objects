const user = {
    firstName: 'Ala',
    lastName: 'Kotowicz',
    sex: 'female',
    age: 25,
}

const { firstName, lastName, sex, age } = user;

console.group('JS Destructuring')
console.log(firstName);
console.log(lastName);
console.log(sex);
console.log(age)
console.groupEnd('JS Destructuring');

console.group('ES6 || without js destructuring')
console.log(user.firstName);
console.log(user.lastName);
console.log(user.sex);
console.log(user.age);
console.groupEnd('ES6 || without js destructuring')
