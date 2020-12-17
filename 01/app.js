const user = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    sex: 'male',
    age: 50
}

for(const key in user) {
    console.log(`${key}: ${user[key]}`)
}