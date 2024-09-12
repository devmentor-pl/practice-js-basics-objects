const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '20',
        month: '04',
        year: '1985'
    }
}


const date = new Date()
console.log(date.getMonth(), date.getDate())
console.log(Number([user.born.month]), Number([user.born.day]))

if (date.getMonth() === Number([user.born.month]) - 1) {
    if (date.getDate() === Number([user.born.day])) {
        console.log('HAPPY BIRTHDAY')
    }
    else {
        console.log('Not today :(')
    }
}
else {
    console.log('Not today :(')
}

