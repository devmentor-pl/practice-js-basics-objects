const user = {
    firstName: 'Adam',
    lastName:'Adamski',
    sex: 'male',
    age: 21,
}

user.getFirstName = function() {
    return this.firstName;
}
user.getLastName = function() {
    return this.lastName;
}
user.getSex = function() {
    return this.sex;
}
user.getAge = function() {
    return this.age;
}

console.log(
    user.getFirstName(),
    user.getLastName(),
    user.getSex(),
    user.getAge(),
);