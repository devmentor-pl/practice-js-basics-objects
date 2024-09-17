const user = {
    firstName: "Adam",
    lastName: "Mickiewicz",
    sex: "Male",
    age: 224
}

console.log(...Object.values(user));

for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}