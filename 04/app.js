const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '13',
        month: '10',
        year: '2022'
        // day: '12',
        // month: '04',
        // year: '1985'
    }
}



const birthday = new Date();
const currentTime = new Object();
currentTime.day = birthday.getDate();
currentTime.month = birthday.getMonth() + 1;
currentTime.year = birthday.getFullYear();

const beta = [];
for (const keys in currentTime) {
    // console.log(currentTime[keys]);
    beta.push(currentTime[keys])
}

const birthdayUser = Object.assign({}, user.born);

const alfa = [];
for (const key in birthdayUser) {
    // console.log(birthdayUser[key])
    alfa.push(birthdayUser[key]);
}

if (alfa[0] == beta[0] && alfa[1] == beta[1] && alfa[2] == beta[2]) {
    console.log(`Użytkownik ma dzisiaj urodziny.`);
} else {
    console.log(`Użytkownik nie ma dzisiaj urodzin.`);
}