


const myLibrary = [];

function Book (title, author, year, rating){
    this.title = title;
    this.author = author;
    this.year = year;
    this.rating = rating;
}

function addBookToLibrary(title, author, year, rating){
    let book = new Book(title, author, year, rating);
    myLibrary.push(book);

}

function createLibrary(){
    for(let i = 0; i<myLibrary.length; i++){
    console.log(myLibrary[i]);
    }
};
