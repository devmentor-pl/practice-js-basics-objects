const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "04",
    year: "1985",
  },
};

const todayDate = new Date();
let actualDay = todayDate.getDate();
let actualMonth = todayDate.getMonth() + 1;
let actualYear = todayDate.getFullYear();

user.isUserBirthday = function () {
  if (
    this.born.day == actualDay &&
    this.born.month == actualMonth &&
    this.born.year == actualYear
  ) {
    console.log("Dzisiaj masz urodziny! Wszystkiego najlepszego!");
  } else {
    console.log(
      "Dzisiaj niestety nie masz urodzin, ale równiez zyczę Ci wszystkiego najlepszego :)"
    );
  }
};

console.log(user.isUserBirthday());
