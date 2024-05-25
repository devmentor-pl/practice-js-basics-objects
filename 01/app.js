const user = {
  firstName: "Jan",
  lastName: "Kowalski",
  sex: "male",
  age: 22,
};

for (let prop in user) {
  console.log(`${prop}: ${user[prop]}`);
}
