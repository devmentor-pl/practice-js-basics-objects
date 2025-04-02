const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "04",
    year: "1985",
  },
  hasBirthdayToDay: function () {
    dateNow = new Date().getDate();
    monthNow = new Date().getMonth() + 1;
    if (this.born.day == dateNow && this.born.month == monthNow) {
      console.log(`${this.firstName} ${this.lastName} has his birthday today.`);
    } else {
      console.log(`Today is not ${this.firstName} ${this.lastName} birthday.`);
    }
  },
};

user.hasBirthdayToDay();
