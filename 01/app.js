const user = {
    firstName: 'John',
    lastName: 'Doe',
    sex: 'male',
    age: '20',
}

for (const key in user) {
    console.log(user[key]);
}