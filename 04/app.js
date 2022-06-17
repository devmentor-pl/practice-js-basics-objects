const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

console.log(Number(user.born.day), Number(user.born.month))

const presDate = new Date();

const presDay = presDate.getDate();

const presMonth = presDate.getMonth() + 1;

console.log(presDay, presMonth);

if (Number(user.born.day) === presDay && Number(user.born.month) === presMonth) {
    console.log('Wszystkiego najlepszego z okazji urodzin!')
}




















// const bornValue = user['born']

// const abbb = function() {

//     for (const value in bornValue) {
//         console.log(bornValue[value])
        
//     }
// }

// abbb()


// const dateOfBirth = new Date(abbb);

// console.log(dateOfBirth)


// const now = new Date();

// const dateValue = user['born']



// console.log(dateOfBirth)