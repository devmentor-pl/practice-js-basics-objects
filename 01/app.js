const user = {
    firstName: 'Michal',
    lastName: 'Filipowski' ,
    sex: 'male',
    age: 32,
    getFirstName: function(){
        return user.firstName
    },
    getLastName: function(){
        return user.lastName
    },
    getSex: function(){
        return user.sex
    },
    getAge: function(){
        return user.age
    },
}



console.log(
user.getFirstName(),
user.getLastName(),
user.getSex(),
user.getAge()
);