const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '11',
        month: '02',
        year: '1985'
    }
}


const today = new Date()
const birthday = new Date(user.born.year, user.born.month -1, user.born.day);

const checkBirthday = (today, birthday) => {
if 
    (today.getMonth() === birthday.getMonth() &&
     today.getDate() === birthday.getDate())  {
        console.log ('Wszystkiego najlepszego');
  } else { console.log('Nie masz dzisiaj urodzin');
    }
}
    
checkBirthday (today, birthday)