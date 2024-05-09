const user = {
  firstName: "Mateusz",
  lastName: "Kowalski",
  sex: "male",
  age: 145
}

const values = Object.values(user);

for (const value of values) {
  console.log(value);
}