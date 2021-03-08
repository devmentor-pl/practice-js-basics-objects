/* W pliku `app.js` znajdziesz zmienną `calendarJS`, która zawiera informacje o wydaniach kolejnych wersji standardu dla języka JavaScript.

Twoim zadaniem będzie wyświetlić te dane w konsoli przy użyciu pętli `for .. in`. Treść jaka ma się pojawić to odpowiednio dla pierwszego wpisu to: `ES1 wydano w terminie 1997-06`.

Jeśli wartość dla danej właściwości będzie równa `null` (tak jak w przypadku ES4) to tekst w konsoli ma się prezentaować w ten sposób: `ES4 nie zostało wydane`.

Pamiętaj, że do wartości właściwości możesz się odwołać przy pomocy konstrukcji `const valueFromObjectProp = object[variableWithPropName]`. */

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

for(const key in calendarJS) {
    console.log(typeof calendarJS[key] === 'string' ? key +' wydano w terminie '+ calendarJS[key] : key +' nie zostało wydane');    
};
