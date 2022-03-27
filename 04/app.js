const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '27',
        month: '03',
        year: '1985'
    }
}

const now = new Date().toLocaleDateString()

const userDay = user.born.day;
const userMonth = user.born.month;


function userBirthday(){
    let userBirthDate = `${user.born.day}.${user.born.month}`;
    
    if(now.includes(userBirthDate)){
        console.log('Happy Birthday'); 
    } else {
        console.log("It's not You birthday today");
    }
}


userBirthday();






