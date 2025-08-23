const user = {
  firstName: 'Jacek',
  lastName: 'Placek',
  sex: 'Męzczyzna',
  age: 40,
};
for (const key in user) {
  console.log(user[key]);
}
