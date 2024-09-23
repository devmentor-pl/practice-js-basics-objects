const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const date = new Date();
const dayOfMonth = date.getDate();
const month = date.getMonth();

const ifBirthday = () => {
    const currentMonth = month + 1
    if (parseInt(user.born.day) === dayOfMonth && parseInt(user.born.month) === currentMonth) {
        console.log(`${user.firstName} obchodzi dzisiaj urodziny !!! Wszystkiego Najlepszego`)
    } else {
        console.log(`${user.firstName} nie obchodzi dzisiaj urodzin`)
    };
}

ifBirthday();
