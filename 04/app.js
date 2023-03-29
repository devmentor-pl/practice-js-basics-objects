const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "29",
    month: "03",
    year: "1985",
  },
};

const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = convertDate(now.getMonth() + 1);
const nowDay = convertDate(now.getDate());

const nowDate = `${nowMonth}-${nowDay}`;
const userDate = `${user.born.month}-${user.born.day}`;

if (nowDate === userDate) {
  console.log(`Masz dzisiaj ${nowYear - Number(user.born.year)} urodziny`);
}

function convertDate(date) {
  if (date < 10) {
    return "0" + date;
  }
  return date;
}
