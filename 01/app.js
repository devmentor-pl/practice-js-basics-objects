const user = {
  firstName: "Anna",
  lastName: "Buller",
  sex: "female",
  age: 29
}

// Wyświetlenie wartości w tablicy
console.log(Object.values(user))

//Wyświetlenie poszczególnych wartości
for(data in user) {
console.log(user[data])}