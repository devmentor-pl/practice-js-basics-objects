const user = {
  firstName: 'Adam',
  lastName: 'Nowak',
  born: {
    day: '14',
    month: '04',
    year: '1985',
  },
};

const curDay = new Date().getDate();
const curMonth = new Date().getMonth() + 1;
const birthDay = Number(user.born.day);
const birthMonth = Number(user.born.month);

function checkIfBirthday() {
  if (curDay === birthDay && curMonth === birthMonth) {
    console.log(`${user.firstName} ma dzisiaj urodziny! 🎈`);
  } else {
    console.log(`${user.firstName} nie ma dzisiaj urodzin!`);
  }
}
checkIfBirthday();
