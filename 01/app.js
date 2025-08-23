const user = {
    firstName: 'Antonio',
    lastName: 'Pilatti',
    sex: 'male',
    age: 29,
}

for(const key in user) {
    console.log(user[key]);
}