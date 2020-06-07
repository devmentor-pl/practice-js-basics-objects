const user = {
  firstName: 'Jerzy',
  lastName: 'Brzęczek',
  sex: 'M',
  age: 40,
};

for (el in user) {
  console.log(`${el}: ${user[el]}`);
}
