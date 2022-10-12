const user = {
  firstName: "Tomek",
  lastName: "Kowalski",
  sex: "mezczyzna",
  age: 35,
}

for (const key in user) {
  console.log(key, user[key]);
}