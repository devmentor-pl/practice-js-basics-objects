const user = {
  firstName: 'Adam',
  lastName: 'Nowak',
  born: {
    day: '14',
    month: '04',
    year: '1985',
  },
};

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;

if (
  currentDay === parseInt(user.born.day) &&
  currentMonth === parseInt(user.born.month)
) {
  console.log('Happy Birthday dear ${user.firstName}!');
} else {
  console.log(`It's not your birthday today.`);
}
