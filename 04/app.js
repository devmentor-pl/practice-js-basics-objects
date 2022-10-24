const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}
const now = new Date();
console.log(now.getFullYear)


// setInterval( function() {
//     const now = new Date();
//     const time = getTime(now);

//     document.title = time;
//     console.clear();
//     console.log(time);
//  }, 1000);

// function getTime(date) {
//     let time = startWithZero(date.getHours());
//     time += ':' + startWithZero(date.getMinutes());
//     time += ':' + startWithZero(date.getSeconds());

//     return time;
// }
// function startWithZero(num) {
//     return (num < 10 ? '0' : '') + num;
// }



