const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "19",
    month: "01",
    year: "1985",
  },
};
const user2 = {
  firstName: "Ada",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "01",
    year: "1985",
  },
};

function checkDate(userInfo) {
  const now = new Date();
  const dayNow = now.getDate();
  const monthNow = parseInt(addZeroBeforeNum(now.getMonth() + 1));

  if (
    parseInt(userInfo.born.day) === dayNow &&
    parseInt(userInfo.born.month) === monthNow
  ) {
    console.log("Happy birthday " + userInfo.firstName);
  } else {
    console.log("Today is not your birthday " + userInfo.firstName);
  }
}

checkDate(user);
checkDate(user2);

function addZeroBeforeNum(num) {
  return (num < 10 ? "0" : "") + num;
}
