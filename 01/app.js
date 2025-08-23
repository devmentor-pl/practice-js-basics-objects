const user = {
    firstName: "Miłosz",
    lastName: "Szmulewicz",
    sex: "man",
    age: 21,
}

for(const key in user) {
    console.log(user[key]);
}