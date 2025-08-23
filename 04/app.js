const user = {
    firstName: "Adam",
    lastName: "Nowak",
    born: {
        day: "14",
        month: "09",
        year: "1985",
    },
};

console.log(Number(user.born.day), Number(user.born.month)); // zamieniam string na liczbę Number//

const currDate = new Date();

const currDay = currDate.getDate();

const currMonth = currDate.getMonth() + 1; // dodaje 1 gdyż getMonth zwraca miesiące od 0 //

console.log(currDay, currMonth);
if (
    Number(user.born.day) === currDay &&
    Number(user.born.month) === currMonth
) {
    console.log(user.firstName + " " + user.lastName + " Obchodzi Urodziny");
} else {
    Number(user.born.day) !== currDay && Number(user.born.month) !== currMonth;
    console.log(
        user.firstName + " " + user.lastName + " Nie obchodzisz dziś urodzin"
    );
}
