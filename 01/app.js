const user = {
  firstName: "John",
  lastName: "Doe",
  sex: "male",
  age: 42,
}

Object.keys(user).forEach(function (key) {
  console.log(`${user[key]}`)
})

// for (const [key, value] of Object.entries(user)) {
//   console.log(`${value}`)
// }

// for (const value of Object.values(user)) {
//   console.log(`${value}`)
// }
