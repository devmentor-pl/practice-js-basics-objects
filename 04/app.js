const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '28',
        month: '07',
        year: '1985'
    }
}

const birthday = Object.values(user.born).slice(0, 2).map(el => parseInt(el));

checkBirthday(birthday);

function checkBirthday(arr) {
    const today = new Date();
    (today.getDate() - arr[0] === 0 && (today.getMonth() + 1) - arr[1] === 0) ?
        console.log(`${user.firstName} ma dziś urodziny :)`) :
        console.log(`${user.firstName} nie ma dziś urodzin :(`);
}