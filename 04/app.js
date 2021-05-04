const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const day = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();


function isTodayYourBirthday() {


    if( ( parseInt(user.born.day) === parseInt(day) ) &&
        ( parseInt(user.born.month) === parseInt(month) ) )  {

        return console.log('Happy Birthday! You are' , ( parseInt(year) - parseInt(user.born.year) ) , 'years old');
    }
       return console.log('Not today mate, sorry')
}


function showCurrentDate() {

    let currentDate = completeData(day);
    currentDate += '.' + completeData(month);
    currentDate += '.' + completeData(year);

    return console.log('Today is:' , currentDate);
}


function  completeData(num) {
   return (num < 10 ? '0' : '') + num;
}



showCurrentDate();
isTodayYourBirthday();

