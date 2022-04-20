const user = {
    firstName: 'Ola',
    lastName: 'Novak',
    sex: 'F',
    age: 30
}

for (const key in user) {
    console.log(user[key]);
}