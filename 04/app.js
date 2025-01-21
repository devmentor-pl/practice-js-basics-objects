const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '21',
        month: '01',
        year: '1985'
    }
}


function isYourBirthdayToday(user) {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;

    return (
    Number(user.born.day) === currentDay && 
    Number(user.born.month) === currentMonth);
}

if(isYourBirthdayToday(user)) {
    console.log('Wszystkiego najlepszego ' + user['firstName'],  user['lastName']);
} else {
    console.log(user['firstName'], user['lastName'] + ' nie masz dziś urodzin.');
}

// jedna rzecz mnie tylko zastanawia 
// na początku użyłem parseInt do przekształcenia stringów
// na liczby aczkolwiek nie chciało działać, a przy uzyciu
// Number wszystko działa, czemu parseInt nie zadziałało?