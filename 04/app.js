const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "04",
    year: "1985",
  },
};

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const userBirthDay = Number(user.born.day);
const userBirthMonth = Number(user.born.month);

function checkBirthday(user) {
  if (userBirthDay === day && userBirthMonth === month) {
    console.log(`Yaay! ${user.firstName} It's your birthday! 🎉`);
  } else {
    console.log(`Sorry ${user.firstName}, today is not your birthday 🥲`);
  }
}
checkBirthday(user);
