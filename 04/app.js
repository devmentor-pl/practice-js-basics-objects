const user1 = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '22',
        month: '04',
        year: '1985'
    }
}

const user2 = {
    firstName: 'Edek',
    lastName: 'Zgredek',
    born: {
        day: '22',
        month: '03',
        year: '1985'
    }
}


const checkBirthday = (user) => {

    let dayNow = new Date().getDate(),
        monthNow = new Date().getMonth(),
        yearNow = new Date().getFullYear(),
        userDay = parseInt(user.born.day),
        userMonth = parseInt(user.born.month) - 1,
        userYear = parseInt(user.born.year);

    if ((dayNow === userDay) && (monthNow === userMonth)) {
        console.log(`Happy ${yearNow - userYear} bday ${user.firstName}!`)
    } else {
        console.log(`It's not your bday today :(`)
    }
}

checkBirthday(user1);
checkBirthday(user2);



