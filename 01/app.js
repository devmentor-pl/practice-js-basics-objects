const user = {
    firstName: "Anna",
    lastName: "Kowalska",
    sex: "kobieta",
    age: 30,
}

for(const key in user) {
    console.log(user[key]);
}