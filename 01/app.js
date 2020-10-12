const user ={
    firstName: 'Mateusz',
    lastName:'Sowa',
    sex: 'male',
    age: 24,
}

for (const key in user) {
   console.log(key+": "+user[key]);
}
