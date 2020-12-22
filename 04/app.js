"use strict";

const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const user2 = {
    firstName: 'Struś',
    lastName: 'Pędziwiatr',
    born: {
        day: '19',
        month: '12',
        year: '1998'
    }
}

if(hasBirthday(user2)) {
    console.log(`Wszystkiego najlepszego, ${user2.firstName}`);
}

function hasBirthday(user) {
    const today = new Date(); 
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;

    return +user.born.day === currentDay && +user.born.month === currentMonth;
}