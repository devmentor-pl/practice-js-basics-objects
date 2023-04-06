const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '10',
        month: '04',
        year: '2001'
    },
}

const today = new Date();

const currYear = today.getFullYear();
const currDay = today.getDate();
const currMonth = today.getMonth() + 1;

const currAge = currYear - Number(user.born.year);

if (
  parseInt(user.born.day) === currDay &&
  Number(user.born.month) === currMonth
) {
  console.log(
    user.firstName + " " + user.lastName + " świętuje dziś " + currAge + " urodziny!");
} else {
  console.log(
    user.firstName + " " + user.lastName + " nie obchodzi urodzin w dniu dzisiejszym!");
}