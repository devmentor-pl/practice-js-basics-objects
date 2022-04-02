const user = {
    firstName: 'Marta',
    lastName: 'Stelmach',
    sex: "female",
    age: 27,
}

for (const key in user) {
    console.log(user[key]);
}