
let shelf = document.querySelector('#bookGrid');

const myLibrary = [];

function Book (title, author, year, rating, read){
    this.title = title;
    this.author = author;
    this.year = year;
    this.rating = rating;
    this.read = read; 
}

function addBookToLibrary(title, author, year, rating, read){
    let book = new Book(title, author, year, rating, read);
    myLibrary.push(book);

}

function createLibrary(){
    for(let i = 0; i<myLibrary.length; i++){
    console.log(myLibrary[i]);

    //assign object to variable within loop

    let objectBook = myLibrary[i];

    //create book card and append to book shelf
    let book = document.createElement("div");
    book.className = "book";
    shelf.appendChild(book);

    // Create DIV elements to sit on book card 

    let title = document.createElement("h2");
    let author = document.createElement("h3");
    let year = document.createElement("p");
    let rating = document.createElement("p");
    let read = document.createElement('p');

    //assign object proprties to DOM elements
    console.log(objectBook.title);
    
    title.textContent = objectBook.title; 
    author.textContent = objectBook.author;
    year.textContent = "Published: " + objectBook.year; 
    rating.textContent = "Rating: " + objectBook.rating;
    read.textContent = "Finished? " + objectBook.read; 
   
    //append new DOM elements to book card

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(year);
    book.appendChild(rating);
    book.appendChild(read); 
    



    
    }
};

//Add book functionality

let addBook = document.querySelector('#addBook');
let dialog = document.querySelector('dialog');
let closeButton = document.querySelector('#closeButton');

addBook.addEventListener('click', () => {
    dialog.showModal();
}); 

closeButton.addEventListener('click', () => {
    dialog.close();
});
