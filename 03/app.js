const books = {
	"978-83-7278-000-3": {
		author: "J.K. Rowling",
		title: {
			en: "Harry Potter and the Philosopher's Stone",
			pl: "Harry Potter i Kamień Filozoficzny",
		},
		translator: {
			en: "Harry Potter and the Chamber of Secrets",
			pl: "Andrzej Polkowski",
		},
	},
	"83-7278-007-2": {
		author: "J.K. Rowling",
		title: {
			en: null,
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
	if (typeof this[isbn]["title"][lang] === "undefined") {
		return null;
	}

	const english = this[isbn]["title"]["en"];
	const polish = this[isbn]["title"]["pl"];
	// console.log(english);
	// console.log(polish);

	if (this[isbn]["title"][lang] === polish) {
		return polish;
	} else {
		return english;
	}
};

books.getTranslator = function (isbn, lang) {
	const polishTranslation = this[isbn]["translator"]["pl"];
	const englishTranslation = this[isbn]["translator"]["en"];
	// console.log(polishTranslation);
	// console.log(englishTranslation);

	if (this[isbn]["translator"][lang] === null) {
		return false;
	} else if (this[isbn]["translator"][lang] === polishTranslation) {
		return polishTranslation;
	} else {
		return englishTranslation;
	}
};

console.log(books.getAuthor("978-83-7278-000-3")); // J.K. Rowling
console.log(books.getAuthor("000-00-0000-000-0")); // null
console.log(books.getTitle("978-83-7278-000-3", "pl")); // Harry Potter i Kamień Filozoficzny
console.log(books.getTitle("978-83-7278-000-3", "en")); // Harry Potter and the Philosopher's Stone
console.log(books.getTranslator("83-7278-007-2", "pl")); // Andrzej Polkowski
console.log(books.getTranslator("83-7278-007-2", "en")); // false
