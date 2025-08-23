const user = {
firstName: 'Alicja',
lastName: 'Nowak',
sex: 'female',
age: 22,
}

for(const key in user) {
    console.log(user[key]);
}