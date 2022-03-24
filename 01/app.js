const user = {
    firstName: 'Adam',
    lastName: 'Pierzynowski',
    sex: 'male',
    age: '35'
}
for (let key in user) {
    console.log(key + ': '+ user[key])
}