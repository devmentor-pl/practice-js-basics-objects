const user = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    sex: 'male',
    age: 29
}

const showProperties = x => {
    for (const item in x) {
        console.log(item)
    }
}
showProperties(user)