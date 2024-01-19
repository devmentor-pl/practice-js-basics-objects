const user = {
  firstName: "John",
  lastName: "Doe",
  sex: "male",
  age: 20,
};

for (const el in user) {
  console.log(user[el]);
}
