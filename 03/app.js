const books = {
    '978-83-7278-000-3': {
        author: 'J.K. Rowling',
        title: {
            en: 'Harry Potter and the Philosopher\'s Stone',
            pl: 'Harry Potter i Kamień Filozoficzny',
        },
        translator: {
            en: null,
            pl: 'Andrzej Polkowski',
        }
    },
    '83-7278-007-2': {
        author: 'J.K. Rowling',
        title: {
            en: 'Harry Potter and the Chamber of Secrets',
            pl: 'Harry Potter i Komnata Tajemnic',
        },
        translator: {
            en: null,
            pl: 'Andrzej Polkowski',
        }
    },
    '83-7001-073-3': {
        author: 'R.E.H. Howard',
        title: {
            en: 'Conan: Road to the trone',
            pl: 'Conan: Droga do tronu',
        },
        translator: {
            en: null,
            pl: 'Stanisław Czaja',
        }
    },
    '83-7001-227-2': {
        author: 'R.E.H. Howard',
        title: {
            en: 'Conan: Hour of the dragon',
            pl: 'Conan: Godzina smoka',
        },
        translator: {
            en: null,
            pl: 'Stanisław Czaja',
        }
    },
}

books.getAuthor = function(isbn) {
    // w tym przypadku this === books
    
    if (typeof this[isbn] === 'undefined') {
        // taki ISBN nie istnieje w moim spisie
        return null;
    }

    const author = this[isbn]['author'];
    if (author) {
        // zwracam informacje o autorze
        return author;
    }

    // brak informacji o autorze
    return false;
}

books.getTitle = function(isbn, lang) {

    if (typeof this[isbn] === 'undefined') {
        // taki ISBN nie istnieje w moim spisie
        return null;
    }

    const title = this[isbn]['title'][lang];

    if (lang === 'pl') {
        return title;
    } 
    if (lang === 'en') {
        return title;
    }
    if (lang === null) {
        return null;
    }
}

books.getTranlator = function(isbn, lang) {

    if (typeof this[isbn] === 'undefined') {
        // taki ISBN nie istnieje w moim spisie
        return null;
    }

    const translator = this[isbn]['translator'][lang];

    if (lang === 'pl') {
        return translator;
    } 
    if (lang === 'en') {
        return translator;
    }
    if (lang === null) {
        return null;
    }
}


console.log( books.getAuthor('978-83-7278-000-3') ); // J.K. Rowling
console.log( books.getAuthor('000-00-0000-000-0') ); // null
console.log( books.getTitle('978-83-7278-000-3', 'pl') ); // Harry Potter i Kamień Filozoficzny
console.log( books.getTitle('978-83-7278-000-3', 'en') ); // Harry Potter and the Philosopher's Stone
console.log( books.getTranlator('83-7278-007-2', 'pl') ); // Andrzej Polkowski
console.log( books.getTranlator('83-7278-007-2', 'en') ); // false

console.log( books.getAuthor('83-7001-073-3') );
console.log( books.getTitle('83-7001-073-3', 'pl') );
console.log( books.getTitle('83-7001-073-3', 'en') );
console.log( books.getTranlator('83-7001-073-3', 'pl') );
console.log( books.getTranlator('83-7001-073-3', 'en') );

console.log( books.getAuthor('83-7001-227-2') );
console.log( books.getTitle('83-7001-227-2', 'pl') );
console.log( books.getTitle('83-7001-227-2', 'en') );
console.log( books.getTranlator('83-7001-227-2', 'pl') );
console.log( books.getTranlator('83-7001-227-2', 'en') );