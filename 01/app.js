const user = {
  firstName: "Frank",
  lastName: "Mendo",
  sex: "male",
  age: 47,
};

for (key in user) {
  console.log(`${key}: ${user[key]}`);
}
