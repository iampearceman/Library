let myLibrary = [];

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);

function Book(title, author) {
  this.title = title
  this.author = author
}

const book1 = new Book('Harry Potter', 'JK Rolling');


function addBookToLibrary() {
    let title = prompt("Please enter your book's title");
    let author = prompt("Please enter your book's author");

    myLibrary.push(new Book(title, author))
}

// addBookToLibrary()

console.log(myLibrary);


function logSubmit(event) {
    console.log(`Form Submitted!`);
    event.preventDefault();
  }
  
  //next step is how to get the values of the input in the logSubmit function.
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements