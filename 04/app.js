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

if (now.getDate() === parseInt(user['born']['day']) && now.getMonth() === parseInt(user['born']['month'])-1) {
    console.log('Adam Nowak ma dzisiaj urodziny!');
}
else {
    console.log('Adam Nowak ma urodziny' + ' ' + user['born']['day'] +'.' + user['born']['month'] + '!');
}