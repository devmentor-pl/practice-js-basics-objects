const books = {
  "978-83-7278-000-3": {
    author: "J.K. Rowling",
    title: {
      en: "Harry Potter and the Philosopher's Stone",
      pl: "Harry Potter i Kamień Filozoficzny",
    },
    translator: {
      en: null,
      pl: "Andrzej Polkowski",
    },
  },
  "83-7278-007-2": {
    author: "J.K. Rowling",
    title: {
      en: "Harry Potter and the Chamber of Secrets",
      pl: "Harry Potter i Komnata Tajemnic ",
    },
    translator: {
      en: null,
      pl: "Andrzej Polkowski",
    },
  },
};

books.getAuthor = function (isbn) {
  // w tym przypadku this === books

  if (typeof this[isbn] === "undefined") {
    // taki ISBN nie istnieje w moim spisie
    return null;
  }

  const author = this[isbn]["author"];
  if (author) {
    // zwracam informacje o autorze
    return author;
  }

  // brak informacji o autorze
  return false;
};

books.getTitle = function (isbn, lang) {
  if (typeof this[isbn] === "undefined") {
    return null;
  }
  if (typeof this[isbn]["translator"][lang] === "undefined") {
    return null;
  }

  return this[isbn]["title"][lang];
};

books.getTranslator = function (isbn, lang) {
  if (typeof this[isbn] === "undefined") {
    return null;
  }

  if (typeof this[isbn]["translator"][lang] !== null) {
    return this[isbn]["translator"][lang];
    //nie wiem dlaczego kod zwraca null zamiast false. Podejrzewam, ze chodzi o to ze kod
    // console.log(typeof (books['83-7278-007-2']['translator']['en']))
    // zwraca object, a
    //console.log(typeof (books['83-7278-007-2']['translator']['pl']))
    //zwraca string
  }
  return false;
};

console.log(books.getAuthor("978-83-7278-000-3")); // J.K. Rowling
console.log(books.getAuthor("000-00-0000-000-0")); // null
console.log(books.getTitle("978-83-7278-000-3", "pl")); // Harry Potter i Kamień Filozoficzny
console.log(books.getTitle("978-83-7278-000-3", "en")); // Harry Potter and the Philosopher's Stone
console.log(books.getTranslator("83-7278-007-2", "pl")); // Andrzej Polkowski
console.log(books.getTranslator("83-7278-007-2", "en")); // false
