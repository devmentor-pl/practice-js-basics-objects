const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '13',
        month: '6',
        year: '1985'
    }
}



const checkBirthday = function (born) {
    const date = new Date();

    // console.log(date.getFullYear(),
    //     date.getMonth() + 1,
    //     date.getDate())

    let month = date.getMonth() + 1;
    console.log(month)
    let day = date.getDate();
    // console.log(day)

    if (month == born.month && day == born.day) {
        console.log('masz dziś urodziny!')
    } else {
        console.log('do twoich urodzin jeszcze trochę!')
    }

}

checkBirthday(user.born)