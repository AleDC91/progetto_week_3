/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("-------------------");
console.log("----ESERCIZIO A----");
console.log("-------------------");
console.log("\n");

let sum = 10 + 20;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO B----");
console.log("-------------------");
console.log("\n");

let random = Math.floor(Math.random() * 21);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO C----");
console.log("-------------------");
console.log("\n");

let me = {
  name: "Alessandro",
  surname: "Dalla Costa",
  age: 32,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO D----");
console.log("-------------------");
console.log("\n");

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO E----");
console.log("-------------------");
console.log("\n");

me.skills = ["PHP", "Python", "SQL"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO F----");
console.log("-------------------");
console.log("\n");

me.skills.push("Javascript");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO G----");
console.log("-------------------");
console.log("\n");

// let removedSkill = me.skills.pop();
// console.log(me);
// console.log(removedSkill);

//  oppure:

me.skills.splice(me.skills.length - 1, 1);
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 1----");
console.log("-------------------");
console.log("\n");

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 2----");
console.log("-------------------");
console.log("\n");

function bigger(x, y) {
  if (!isNaN(x) && !isNaN(y) && arguments.length === 2) {
    if (x >= y) {
      // se sono uguali restituisco il primo
      return x;
    } else {
      return y;
    }
  } else {
    return "errore! inserisci 2 numeri!";
  }
}
console.log(bigger(14, -2));
console.log(bigger(12, 3, 4));
console.log(bigger("a", 12));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 3----");
console.log("-------------------");
console.log("\n");

function splitMe(str) {
  return str.split(" ");
}
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 4----");
console.log("-------------------");
console.log("\n");

function deleteOne(str, deleteFirst = false) {
  if (deleteFirst) {
    return str.substring(1);
  } else {
    return str.substring(0, str.length - 1);
  }
}

console.log(deleteOne("stringa di prova", true));
console.log(deleteOne("stringa di prova", false));
console.log(deleteOne("stringa di prova"));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 5----");
console.log("-------------------");
console.log("\n");

function onlyLetters(str) {
  arrStr = str.split(" ");
  return arrStr.filter((item) => isNaN(Number(item))).join(" ");
}

console.log(onlyLetters("I have 4 dogs and 47 sisters"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 6----");
console.log("-------------------");
console.log("\n");

// controllo solamente la struttura generale. eventuali caratteri speciali sarebbe meglio controllarli con regex
function isThisAnEmail(str) {
  arrMail = str.split("@");
  console.log(arrMail);
  if (arrMail[0] && arrMail[1]) {
    if (arrMail[0] && arrMail[1].includes(".")) {
      let dominio = arrMail[1].split(".");
      if (dominio[dominio.length - 1].length > 1) {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
}

console.log(isThisAnEmail("ale91.dallas@gmail.com"));
console.log(isThisAnEmail("ale91.dallasgmail.com"));
console.log(isThisAnEmail("ale91.dallas@gmail"));
console.log(isThisAnEmail("@gmail.com"));
console.log(isThisAnEmail("ale91.dallas@gmail.it"));
console.log(isThisAnEmail("ale91.dallas@gmail.i"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 7----");
console.log("-------------------");
console.log("\n");

function whatDayIsIt() {
  let now = new Date();
  let day = now.getDay();
  switch (day) {
    case 1:
      return "Lunedì";
      break;
    case 2:
      return "Martedì";
      break;
    case 3:
      return "Mercoledì";
      break;
    case 4:
      return "Giovedì";
      break;
    case 5:
      return "Venerdì";
      break;
    case 6:
      return "Sabato";
      break;
    case 7:
      return "Domenica";
      break;
  }
}

console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 8----");
console.log("-------------------");
console.log("\n");

function rollTheDices(n) {
  let obj = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < n; i++) {
    let num = dice();
    obj.sum += num;
    obj.values.push(num);
  }
  return obj;
}

console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 9----");
console.log("-------------------");
console.log("\n");

function howManyDays(day) {
  let date = Date.parse(day);
  // console.log(date);
  let now = new Date();
  let nowEpoch = now.getTime();
  // console.log(nowEpoch);
  let msTot = Math.abs(nowEpoch - date);
  // console.log(msTot);
  let days = Math.floor(msTot / 1000 / 60 / 60 / 24);
  // console.log(days);
  return days;
}

console.log(howManyDays("2022-11-13"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 10---");
console.log("-------------------");
console.log("\n");

let isTodayMyBirthday = () => {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  if (month === 1 && day === 13) {
    return true;
  } else {
    return false;
  }

  // console.log(month, day);
};

console.log(isTodayMyBirthday());

// Arrays & Oggetti
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 11---");
console.log("-------------------");
console.log("\n");

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

console.log(deleteProp(me, "surname"));
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 12---");
console.log("-------------------");
console.log("\n");

function newestMovie(list) {
  let newestYear = Number(list[0].Year);
  let newestTitle = list[0].Title;
  console.log(newestYear);
  console.log(newestTitle);
  list.forEach((element) => {
    if (Number(element.Year) > newestYear) {
      newestYear = Number(element.Year);
      newestTitle = element.Title;
    }
  });
  console.log(newestYear);
  console.log(newestTitle);
  return newestTitle;
}

newestMovie(movies);
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 13---");
console.log("-------------------");
console.log("\n");

function countMovies(list) {
  return list.length;
}

console.log(countMovies(movies));
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 14---");
console.log("-------------------");
console.log("\n");

let onlyTheYears = (list) => {
  let years = [];
  list.forEach((item) => {
    years.push(Number(item.Year));
  });
  return years;
};

console.log(onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 15---");
console.log("-------------------");
console.log("\n");

let onlyInLastMillennium = (list) => {
  let years = [];
  list.forEach((item) => {
    if (item.Year >= 2000) {
      years.push(Number(item.Year));
    }
  });
  return years;
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 16---");
console.log("-------------------");
console.log("\n");

let sumAllTheYears = (list) => {
  let years = onlyTheYears(list);
  return years.reduce((acc, total) => acc + total, 0);
};

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 17---");
console.log("-------------------");
console.log("\n");

let searchByTitle = (list, str) => {
  let result = [];
  list.forEach((movie) => {
    if (movie.Title.toLowerCase().includes(str.toLowerCase())) {
      result.push(movie.Title);
    }
  });
  return result;
};

console.log(searchByTitle(movies, "Avengers"));
console.log(searchByTitle(movies, "lord"));






/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 18---");
console.log("-------------------");
console.log("\n");

let searchAndDivide = (list, str) => {
  let result = {
    match: [],
    unmatch: [],
  };

  list.forEach((movie) => {
    if (movie.Title.toLowerCase().includes(str.toLowerCase())) {
      result.match.push(movie.Title);
    } else {
      result.unmatch.push(movie.Title);
    }
  });
  return result;
};

console.log(searchAndDivide(movies, "lord"));
console.log(searchAndDivide(movies, "war"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 19---");
console.log("-------------------");
console.log("\n");

function removeIndex(list, index) {
  list.splice(index, 1);
  return list;
}

console.log(removeIndex(movies, 7));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 20---");
console.log("-------------------");
console.log("\n");

// let container = document.getElementById('container');
// oppure:
// let container = document.querySelector('#container');
// console.dir(container);

// tramite funzione:
function selectId(id) {
  return document.querySelector(`#${id}`);
}
console.dir(selectId("container"));

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 21---");
console.log("-------------------");
console.log("\n");

// let allTd = document.getElementsByTagName('td'); // restituisce una HTMLCollection. I valori sono accessibili solo tramite indice.
// oppure:
// let allTd = document.querySelectorAll('td'); // restituisce una NodeList, utile se voglio usare metodo forEach().
// console.dir(allTd);

// tramite funzione:
function selectElements(tag) {
  return document.querySelectorAll(tag);
}

console.dir(selectElements("td"));

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 22---");
console.log("-------------------");
console.log("\n");

function printAllElements(tag) {
  let elements = document.querySelectorAll(tag);
  elements.forEach((item) => console.log(item.innerText));
}

printAllElements('td');
// printAllElements('th');

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 23---");
console.log("-------------------");
console.log("\n");

let redLinks = () => {
  let links = document.querySelectorAll('a');
  links.forEach(link => link.style.backgroundColor = 'red')
}

redLinks();
console.log('risultato a video')

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 24---");
console.log("-------------------");
console.log("\n");

let addElementToUlwithId = (id, content) => {
let ul = document.querySelector('#' + id);
let li = document.createElement('li');
li.innerText = content;
ul.appendChild(li);
}

addElementToUlwithId('myList', 'nuovo elemento');
addElementToUlwithId('myList', 'altro elemento');


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 25---");
console.log("-------------------");
console.log("\n");

function emptyListById(id){
  let ul = document.querySelector('#' + id);
  ul.innerHTML = ''
}
emptyListById('myList');

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 26---");
console.log("-------------------");
console.log("\n");

let addClassToElement = (tag, className) => {
  let elements = document.querySelectorAll(tag);

  elements.forEach(element => element.classList.add(className));
}
addClassToElement('tr', 'test');


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 27---");
console.log("-------------------");
console.log("\n");


let halfTree = n => {
  for(let i = 0; i < n; i++){
    let row = [];
    for(let j = 0; j <= i; j++){
      row.push('*');
    }
    let str = row.join(' ')
    console.log(str);
    row = "";
  }
}


halfTree(10);


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 28---");
console.log("-------------------");
console.log("\n");


function tree(n) {
  for(let i = 0; i < n; i++){
    let row = [];
    for(let j = 0; j < (n-i); j++){
    row.push(' ')};
    for(let k = 0; k < ((i*2) - 1); k++){
    row.push('*');}
    for(let j = 0; j < (n-i); j++){
    row.push(' ')};
    let str = row.join(' ')
    console.log(str);
    row = "";
  }
}

tree(10)
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 29---");
console.log("-------------------");
console.log("\n");

function itIsPrime(n){
  let prime = true;
  for(let i = 2; i < n; i++){
    if(n % i === 0){
      prime = false;
    }
  }
  return prime;
} 

console.log(itIsPrime(7));
console.log(itIsPrime(266));
console.log(itIsPrime(19));
console.log(itIsPrime(21));
console.log(itIsPrime(5));



/* Questo array viene usato per gli esercizi. Non modificarlo. */
