const calendarJS = {
    'ES1':'Es1 wydano w latach 1997-06',
    'ES2':'Es2 wydano w latach 1998-06',
    'ES3':'Es3 wydano w latach 1999-12',
    'ES4': null,
    'ES5':'Es5 wydano w latach 2009-12',
    'ES6':'Es6 wydano w latach2015-06',
    'ES7':'Es7 wydano w latach2016-06',
    'ES8':'Es8 wydano w latach2017-06',
    'ES9':'Es9 wydano w latach2018-06',
}

for (const js in calendarJS) {
    if(js === null) {
        console.log('nie została wydana!')
    } else {
        console.log(calendarJS[js]);
    }
}