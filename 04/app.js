const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '1',
        month: '04',
        year: '1985'
    }
}

const todayDay = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate() ;
const todayMonth = (new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : (new Date().getMonth() + 1) ;

const userBornDay = Number(user.born.day) < 10 ? `0${Number(user.born.day)}` : `${Number(user.born.day)}`;
const userBornMonth = Number(user.born.month) < 10 ? `0${Number(user.born.month)}` : `${Number(user.born.month)}`;
const userBDay = userBornDay + userBornMonth;

const todayDate = todayDay + todayMonth;
// console.log(todayDay);
// console.log(todayMonth);
// console.log(userBornDay);
// console.log(userBornMonth);
// console.log(userBDay);
// console.log(todayDate);

if(userBDay === todayDate){
    console.log("Ten użytkownik ma dzisiaj urodziny")
} else {
    console.log("Ten użytkownik nie ma dzisiaj urodzin")
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//second solution universal method
// const userBirthDay = new Date(`${user.born.month},${user.born.day}`);
// const today = new Date();
// const todayD = today.getDate();
// const todayM = today.getMonth() + 1;
// const compareDate = new Date(`${todayM},${todayD}`);
// console.log(userBirthDay);
// console.log(todayD);
// console.log(todayM);
// console.log(compareDate.getMilliseconds());


// if(userBirthDay.getMilliseconds() === compareDate.getMilliseconds()){
//     console.log("Ten użytkownik ma dzisiaj urodziny SPOSÓB 2");
// } else {
//     console.log("Ten użytkownik nie ma dzisiaj urodzin SPOSÓB 2");
// }