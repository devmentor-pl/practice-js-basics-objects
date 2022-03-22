const user = {

    firstName: "Martyna",
    lastName: "Giee",
    sex: "female",
    age: 34,
}

for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}