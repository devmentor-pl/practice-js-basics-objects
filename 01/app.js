const user = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    sex: "Male",
    age: "27",
}


for(const key in user) {
    console.log( user[key] )
}