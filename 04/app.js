const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

user.checkIfBirthdayIsToday = function() {
    const today = new Date();
    const day = today.getDate();
    const dayTransformToString = day < 10 ? "0" + day.toLocaleString() : day.toLocaleString();
    const month = today.getMonth() + 1;
    const monthTransformToString = month < 10 ? "0" + month.toLocaleString() : month.toLocaleString();

    if(dayTransformToString === this.born.day && monthTransformToString === this.born.month) {
        return console.log('dzisiaj są twoje urodziny! Wszystkiego najlepszego!')
    }

    return console.log('niestety dzisiaj nie masz urodzin')
}

user.checkIfBirthdayIsToday();