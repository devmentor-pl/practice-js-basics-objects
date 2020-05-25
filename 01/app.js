function allInfo()
{
    console.log(this.firstName, this.lastName, this.sex, this.age)
}

const user ={
    firstName: 'Andrzej',
    lastName: 'Krzywy',
    sex: 'male',
    age: '32',
    show: allInfo,
}



user.show();