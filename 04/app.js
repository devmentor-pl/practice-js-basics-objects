const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const today = new Date();
const currentDate = today.getDate(); // uzyskujemy dzień miesiąca
const currentMonth = today.getMonth() + 1;
const birthDay = parseInt(user.born.day);
const birthMonth = parseInt(user.born.month);

function getBirthdayDate() {
    if (currentDate === birthDay && currentMonth === birthMonth) {
        console.log(`Dear ${user.firstName} ${user.lastName}, today is your birthday!`)
    } else {
        console.log(`Dear ${user.firstName} ${user.lastName}, today is not your birthday.`)
    }
}

getBirthdayDate()