const user = {
  firstName: 'Martin',
  lastName: 'Eden',
  sex: 'male',
  age: 44,
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.sex);
console.log(user.age);

for (const key in user) {
  console.log(user[key]);
}
