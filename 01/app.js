const user = {
    firstName: 'Michal',
    lastName: 'Wasiak',
    sex: 'male',
    age: 44,
}

for(const key in user){
    console.log(user[key]);
}