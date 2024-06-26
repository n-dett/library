let book1 = new Book("Kitchen Confidential", "Anthony Bourdain", 320, "Finished");
let book2 = new Book("The Creative Act: A Way of Being", "Rick Rubin", 432, "Finished");

// Include two books by default
const library = [];
library.push(book1);
library.push(book2);

createBook();
window.addEventListener("load", displayBooks());

function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
}

function displayBooks() {
    // All cards container
    const cardsContainer = document.getElementById("book-cards");

    // Clear library
    cardsContainer.innerHTML = '';

    library.forEach(book => {
        // Create card
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("book-card");

        // Add title
        const bookTitle = document.createElement("h3");
        bookTitle.innerText = book.title;
        cardContainer.appendChild(bookTitle);

        // Add hr
        const rule = document.createElement("hr");
        cardContainer.appendChild(rule);

        // Add author
        const authorContainer = document.createElement("div");
        cardContainer.classList.add("author-container");

        const byline = document.createElement("p");
        byline.innerText = `by ${book.author}`;
        authorContainer.appendChild(byline);

        // const authorName = document.createElement("p");
        // authorName.classList.add('author-name');
        // authorName.innerText = book.author;
        // authorContainer.appendChild(authorName);
        cardContainer.appendChild(authorContainer);

        // Add pages and finished
        const pagesAndFinishedContainer = document.createElement("div");
        pagesAndFinishedContainer.classList.add("pages-finished-container");
        const pagesContainer = document.createElement("div");
        pagesContainer.classList.add("pages-container");

        const pageNum = document.createElement("p");
        pageNum.innerText = book.pages;
        pagesContainer.appendChild(pageNum);

        const pagesText = document.createElement("p");
        pagesText.innerText = "Pages";
        pagesContainer.appendChild(pagesText);
        pagesAndFinishedContainer.appendChild(pagesContainer);

        const bullet = document.createElement("p");
        bullet.innerText = "•";
        pagesAndFinishedContainer.appendChild(bullet);

        const bookFinished = document.createElement("p");
        bookFinished.innerText = book.finished;
        pagesAndFinishedContainer.appendChild(bookFinished);
        cardContainer.appendChild(pagesAndFinishedContainer);

        cardsContainer.appendChild(cardContainer);
    });
}

function addBook(newBook) {
    library.push(newBook);
    displayBooks();
}


function createBook() {
    const btn = document.getElementById("add-book-btn");
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let finished = document.getElementById("finished");

    // Display correct text for "finished"
    if(finished.checked){
        finished = "Finished";
    } else {
        finished = "Not Finished";
    }

    // On click save the input values to an object
    btn.addEventListener("click", function() {
    let newBook = new Book(title.value, author.value, Number(pages.value),
    finished);

    addBook(newBook);
    })
}


