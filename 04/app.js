const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '23',
        month: '08',
        year: '1985'
    }
}
const months = ['01','02','03','04','05','06','07','08','09','10','11','12',];
const now = new Date();
const birthday = user.born;

if(birthday.day == now.getDate() &&
months.indexOf(birthday.month) == now.getMonth()) {
    console.log("Happy Birthday!")
}
else{
    console.log("It's not your birthday")
}

