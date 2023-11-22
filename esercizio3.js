/*Esercizio 3 - Array e oggetti*/

const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

const rating = book.rating;
book.rating = 6;

book.increaseRating = function (n) {

    this.rating += n;
    if(this.rating > 10) {
       this.rating = 10;
    }
};

delete book.year;

const keys = Object.keys(book);

for (let i = 0; i<keys.length; i++) {
    const key = keys[i];
    const value = book[key];
    console.log(`${key}: ${value}`);
}



