const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "04",
    year: "1985",
  },
};

function getDate() {
  const date = new Date();
  const dateToLocal = date.toLocaleDateString();

  const splitDate = dateToLocal.split(".");
  const userBirth = user.born;

  const arrSplit = [];
  const arrUser = [];

  for (const key in splitDate) {
    arrSplit.push(splitDate[key]);
  }
  for (const key in userBirth) {
    arrUser.push(userBirth[key]);
  }

  let checkIfMatch = arrUser.every((i) => arrSplit.includes(i));
  console.log(checkIfMatch);
}

getDate();
