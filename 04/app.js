const user = {
  firstName: 'Adam',
  lastName: 'Nowak',
  born: {
    day: '14',
    month: '04',
    year: '1985',
  },
};

const date = new Date();

const currDay = date.getDate();
const currMonth = date.getMonth() + 1;

console.log(currDay, currMonth);

if (
  parseInt(user.born.day) === currDay &&
  parseInt(user.born.month) === currMonth
) {
  console.log('Mam urodziny');
} else {
  console.log('Nie mam urodzin');
}
