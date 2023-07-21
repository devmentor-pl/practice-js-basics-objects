const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: Number("21"),
    month: Number("07"),
    year: Number("2023"),
  },
};

function getDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
   if (user.born['day'] === day || user.born['month'] === month || user.born['year'] === year) {
    console.log('Happy Birthday');
   }
} 

getDate(user);
