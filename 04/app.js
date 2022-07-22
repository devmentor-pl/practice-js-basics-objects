const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "04",
    year: "1985",
  },
};

const now = new Date();

let month = now.getMonth() + 1;
let day = now.getDate();

if (month < 10) {
  month = "0" + month;
}

if (month == user.born.month && day == user.born.day) {
  console.log("Sto lat!");
}
