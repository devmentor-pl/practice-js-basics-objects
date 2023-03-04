const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '23',
        month: '02',
        year: '2023'
    }
}

const now = new Date();
const yearNow = now.getFullYear();
const monthNow = now.getMonth();
const dayNow =  now.getDay();

function checkIfBirthday() {
if(
    user.born.day == dayNow,
    user.born.month == monthNow,
    user.born.year == yearNow
) {
    console.log("It's your birthday!")
}else{
    console.log("It's not your bday")
}}


checkIfBirthday()
