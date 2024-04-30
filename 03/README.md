> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e04-js-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*


&nbsp;

# `#03` JavaScript: Podstawy – obiekty

Tym razem w pliku `app.js` znajdziesz rozbudowaną strukturę, która przechowuje informacje o książkach. Nazwa właściwości obiektu to number ISBN książki. Przypisana do niej wartość to obiekt, który przechowuje informacje o książce identyfikującej się tym numerem ISBN.

Twoim zadaniem będzie napisanie funkcji `getTitle` oraz `getTranslator`, które pozwolą pobrać informacje o konkretnej książce. Funkcja `getAuthor` została już napisana i możesz się na niej wzorować, jednak pamiętaj, że przyjmuje ona tylko jeden parametr.

W przypadku Twoich funkcji (metod) mamy dodatkową zależność, która jest identyfikowana przy pomocy drugiego parametru. Pamiętaj, aby sprawdzić, czy właściwość istnieje. Jeśli nie, to zwróć `null`.

W przypadku funkcji `getTranslator` sprawdź również, czy wartość dla konkretnego języka we właściwości `translator` nie jest równa `null`. Jeśli jest, oznacza to, że wybrany język jest językiem oryginału i wtedy należy zwrócić `false`.


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-basics/)*

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
