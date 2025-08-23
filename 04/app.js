const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '30',
        month: '03',
        year: '1985'
    }
}

const today = new Date();
let day = addZeroBefore(today.getUTCDate());
let month = addZeroBefore(today.getUTCMonth() + 1);





if (user['born']['day'] === day && user['born']['month'] === month) {

    console.log('Today is this day, Happy Birthday ' + user['firstName'] + ' ' + user['lastName']);

}

function addZeroBefore(data) {
    return (data < 10 ? '0' : '') + data;
}