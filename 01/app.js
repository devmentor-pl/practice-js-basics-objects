const user = {
  firstName: "Lukasz",
  lastName: "Skrzypczynski",
  sex: "Male",
  age: 25,
};

for (const prop in user) {
  console.log(prop + ": " + user[prop]);
}