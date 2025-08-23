const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

console.log(parseInt(user.born.day), Number(user.born.month))

const nowDate = new Date();
const nowDay = nowDate.getDate();
const nowMonth = nowDate.getMonth() +1 ;

console.log(nowDay, nowMonth);

if(parseInt(user.born.day) === nowDay && Number(user.born.month) === nowMonth) {
    console.log('Happy Birthday')
}