const user = {
  firstName: "Zenon",
  lastName: "Zenonkiewicz",
  sex: "male",
  age: 70,
};

for (const [key, value] of Object.entries(user)) {
  console.log(value);
}
