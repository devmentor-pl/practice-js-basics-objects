const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '10',
        month: '09',
        year: '1985'
    }
}

const today = new Date();

const todayDay = today.getDate();
const todayMonth = today.getMonth() + 1;

const userDay = Number(user.born.day);
const userMonth = Number(user.born.month);

if (todayDay === userDay && todayMonth === userMonth ) {
    console.log ('it is birthday day ' + user.firstName ); 
} else {
    console.log ('it is not birthday day ' + user.firstName)
}
