const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '10',
        month: '03',
        year: '1985'
    }
}


function birthday(){
    if(parseInt(user.born.day) === currDay && parseInt(user.born.month) === currMonth){
        console.log('Wszystkiego najlepszego ! Dzis sa Twoje urodziny !')
    }
}

const date = new Date();
const currDay = date.getDate();
const currMonth = date.getMonth();

birthday()
