const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "01",
    month: "08",
    year: "1985",
  },
};

const today = new Date();
const day = startWtihZero(today.getDate());
const month = startWtihZero(today.getMonth() + 1);

if (month === user.born.month) {
  if (day === user.born.day) {
    console.log("Użytkownik ma dzisiaj urodziny!");
  } else {
    console.log("Użytkownik nie ma dzisiaj urodzin");
  }
} else {
  console.log("Użytkownik nie ma dzisiaj urodzin");
}

function startWtihZero(num) {
  return (num < 10 ? "0" : "") + num;
}
