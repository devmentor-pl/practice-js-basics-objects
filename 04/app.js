const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '06',
        month: '04',
        year: '1985'
    }
}

function checkBirthday(person){
    const currDate = new Date();
    const time = getTime(currDate);
    
    if(person.born.day === time.day && person.born.month === time.month){
        console.log("Wszystkiego Najlepszego!")
    }
 
}

function getTime(date){
    const time = {
        day : startWithZero(date.getDate()),
        month : startWithZero(date.getMonth() + 1),
    }
    return time
}

function startWithZero(num){
    return (num < 10 ? '0': '') + num
}

checkBirthday(user);