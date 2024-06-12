const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "08",
    month: "04",
    year: "1985",
  },
};

const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1;

const day = Number(user.born.day);
const month = Number(user.born.month);

birthdayCheck();

function birthdayCheck() {
  if (day === currentDay && month === currentMonth) {
    console.log(user.firstName + " ma dziś urodziny!");
    return true;
  } else {
    console.log(user.firstName + " nie ma dziś urodzin");
    return false;
  }
}
