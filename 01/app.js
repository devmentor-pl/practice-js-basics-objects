const user = {
    firstName: 'Adam',
    lastName: 'Małysz',
    sex: 'male',
    age: 46,
};

for (const key in user) {
    console.log(user[key]);
}