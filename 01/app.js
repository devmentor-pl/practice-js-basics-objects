const user = {
  firstName: "Zuzanna",
  lastName: "Ganobis",
  sex: "female",
  age: 28,
};

console.log(user.firstName, user.lastName, user.sex, user.age);

for (let data in user) console.log(user[data]);
