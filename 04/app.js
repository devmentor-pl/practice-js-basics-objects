const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '09',
        month: '05',
        year: '2024'
    }
}

const date = new Date();
const day = date.getDate();
const month = date.getMonth() +1;
 
const userBirthday = new Date(user.born.year, user.born.month, user.born.day);

if(month === userBirthday.getMonth() && day === userBirthday.getDate()) {
    console.log("Wszystkiego Nalpeszego!")
} else {
    console.log("Nie masz dzis urodzin")
}