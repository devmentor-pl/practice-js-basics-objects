const calendarJS = {
    'ES1': '1997-06',
    'ES2': '1998-06',
    'ES3': '1999-12',
    'ES4': null,
    'ES5': '2009-12',
    'ES6': '2015-06',
    'ES7': '2016-06',
    'ES8': '2017-06',
    'ES9': '2018-06',
}
for (const info in calendarJS) {
    const valueFromObjectProp = calendarJS['ES4'];

    if ((calendarJS[info]) === valueFromObjectProp) {
        console.log(info + ' nie zostało wydane');

    }else{
        console.log(info + ' wydano w ' + (calendarJS[info]));
    }
}
