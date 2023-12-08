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



function validateValue(val) {
    if(val === null) {
        return "withNull";
    }
    return "withoutNull";
}

function getValues(obj) {
    for(const key in obj) {
        const value = validateValue(obj[key]);
        showValues(value, key, obj);

    }
}


function makeCom(validated, val, obj) {
    const communicates = {
        withoutNull: `${val} wydano w terminie ${obj[val]}`,
        withNull: `${val} nie zostało wydane`
    }
    return communicates[validated];
}

function showValues(validated, val, obj) {
    console.log(makeCom(validated, val, obj))
}

getValues(calendarJS);