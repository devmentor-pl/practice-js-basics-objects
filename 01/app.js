const user = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    sex: 'male',
    age: 24,
}

for(const value in user) {
    console.log(value + ':' + user[value]);
}