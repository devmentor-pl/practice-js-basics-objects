const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}
const now = new Date();

console.log(now.getMonth() +1, now.getDate());

console.log(user.born.day, user.born.month);
const currMonth = now.getMonth() +1;

if(parseInt(user.born.day) === now.getDate() && parseInt(user.born.month) === currMonth) {
    console.log("Masz urodziny")
} else {
    console.log("Nie masz dziś urodzin");
}
        