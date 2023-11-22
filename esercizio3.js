/*Esercizio 3 - Array e oggetti*/

const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

book.rating = 6;

book.increaseRating = function (n) {

    book.rating += n;
    if(book.rating > 10) {
       book.rating = 10;
    }
};

/*book.increaseRating (7) -- Test per la funzione*/


delete book.year;

const keys = Object.keys(book);

for (let i = 0; i<keys.length; i++) {
    const key = keys[i];
    const value = book[key];
    console.log(`${key}: ${value}`);
};



