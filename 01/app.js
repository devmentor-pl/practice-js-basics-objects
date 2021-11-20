const user = {
    firstName: 'Helmut',
    lastName: 'Schmidt',
    sex: 'male',
    age: 60,
}

console.log(
    user.firstName,
    user.lastName,
    user.sex,
    user.age,
    );

for(const key in user) {
    console.log(user[key])
    }