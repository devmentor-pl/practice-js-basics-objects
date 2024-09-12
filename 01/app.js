const user = {
    firstName: 'Sebastian',
    lastName: 'Wapinski',
    sex: 'male',
    age: 27,
}

for(const key in user) {
    console.log(user[key]);
}