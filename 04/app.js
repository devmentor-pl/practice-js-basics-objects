function isBornToday() {

    const currentMonth = new Date().getMonth() +1;
    const currentDay = new Date().getDate();

    console.log(currentMonth, currentDay, this );
    const userMonth = parseInt(this.born.month);
    const userDay = parseInt(this.born.day);

    console.log(typeof currentDay, typeof userDay);

    if(currentDay === userDay && currentMonth === userMonth) {
        return true;
    }

    return false;
}


const user1 = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '04',
        month: '01',
        year: '1985'
    },
    checkBorn: isBornToday
}

const result1 = user1.checkBorn();
console.log(result1);

// const user2 = {
//     firstName: 'Adam',
//     lastName: 'Nowak',
//     born: {
//         day: '06',
//         month: '01',
//         year: '1985'
//     },
//     checkBorn: isBornToday
// }
// const result2 = user2.checkBorn();
// console.log(result2);