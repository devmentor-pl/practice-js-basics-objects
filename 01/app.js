const user = {
    firstName: 'Marcin',
    lastName: 'Frąckowiak',
    sex: 'male',
    age: 36,
}

for(const key in user) {
    console.log(user[key]);
}