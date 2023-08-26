const user = {
    firstName: 'Jan',
    lastName: "Kowalski",
    sex: 'man',
    age: '50',
}

for (const key in user) {
    console.log(user[key])
}

