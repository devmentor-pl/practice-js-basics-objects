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
            pl: 'Harry Potter i Komnata Tajemnic ',
        },
        translator: {
            en: null,
            pl: 'Andrzej Polkowski',
        }
    },
}

books.getAuthor = function(isbn) {
    // w tym przypadku this === books
    
    if(typeof this[isbn] === 'undefined') {
        // taki ISBN nie istnieje w moim spisie
        return null;
    }

    const author = this[isbn]['author'];
    if(author) {
        // zwracam informacje o autorze
        return author;
    }

    // brak informacji o autorze
    return false;
}

books.getTitle = function(isbn, lang) {
    
        const plTitle = this[isbn]['title']['pl']
        const enTitle = this[isbn]['title']['en']
        //console.log(lang)
        if(lang !== 'en')
        {
            return plTitle;
        }
        return enTitle
    }

books.getTranlator = function(isbn, lang) {
    const plTranslator = this[isbn]['translator']['pl']
    const engTranslator = this[isbn]['translator']['en']

    if(lang === 'pl')
    {
        return plTranslator
    }
    else if(engTranslator === null || plTranslator === null){
        return false;
            }
    else 
    {
        return engTranslator;
    }


}


console.log( books.getAuthor('978-83-7278-000-3') ); // J.K. Rowling
console.log( books.getAuthor('000-00-0000-000-0') ); // null
console.log( books.getTitle('978-83-7278-000-3', 'pl') ); // Harry Potter i Kamień Filozoficzny
console.log( books.getTitle('978-83-7278-000-3', 'en') ); // Harry Potter and the Philosopher's Stone
console.log( books.getTranlator('978-83-7278-000-3', 'pl') );
console.log( books.getTranlator('978-83-7278-000-3', 'en') );
console.log(books.getTitle('83-7278-007-2', 'pl') );
console.log(books.getTitle('83-7278-007-2', 'en') );
console.log( books.getTranlator('83-7278-007-2', 'pl') ); // Andrzej Polkowski
console.log( books.getTranlator('83-7278-007-2', 'en') ); // false
