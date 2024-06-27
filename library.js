let book1 = new Book("Kitchen Confidential", "Anthony Bourdain", 320, "Finished");
let book2 = new Book("The Creative Act: A Way of Being", "Rick Rubin", 432, "Finished");

// Include two books by default
const library = [];
library.push(book1);
library.push(book2);

createBook();
window.addEventListener("load", displayBooks());
removeBook();

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
        authorContainer.classList.add("author-container");

        const byline = document.createElement("p");
        byline.innerText = `by ${book.author}`;
        authorContainer.appendChild(byline);
        cardContainer.appendChild(authorContainer);

        // Add pages and finished
        const pagesAndFinishedContainer = document.createElement("div");
        pagesAndFinishedContainer.classList.add("pages-finished-container");
        const pagesContainer = document.createElement("div");
        pagesContainer.classList.add("pages-container");

        const pageNum = document.createElement("p");
        pageNum.innerText = `${book.pages} Pages`;
        pagesContainer.appendChild(pageNum);
        pagesAndFinishedContainer.appendChild(pagesContainer);

        const bullet = document.createElement("p");
        bullet.innerText = "•";
        pagesAndFinishedContainer.appendChild(bullet);

        const bookFinished = document.createElement("p");
        bookFinished.innerText = book.finished;
        pagesAndFinishedContainer.appendChild(bookFinished);
        cardContainer.appendChild(pagesAndFinishedContainer);

        // Buttons
        const btnsContainer = document.createElement("div");
        btnsContainer.classList.add("card-btns-container");

        // Status Button
        const statusBtn = document.createElement("button");
        statusBtn.innerText = "Change Status";
        statusBtn.classList.add("card-btns");
        btnsContainer.appendChild(statusBtn);

        // Remove Button
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("card-btns");
        btnsContainer.appendChild(removeBtn);
        cardContainer.appendChild(btnsContainer);


        cardsContainer.appendChild(cardContainer);
    });
}

function addBook(newBook) {
    library.push(newBook);
    displayBooks();
}


function createBook() {
    const addBtn = document.getElementById("add-book-btn");
    let titleInput = document.getElementById("title");
    let authorInput = document.getElementById("author");
    let pagesInput = document.getElementById("pages");
    let finishedInput = document.getElementById("finished");




    // On click save the input values to an object
    addBtn.addEventListener("click", function() {
        // Display correct text for "finished"
        let finished = "Not Finished";
        if(finishedInput.checked) finished = "Finished";

        // Create new book
        let newBook = new Book(titleInput.value, authorInput.value, Number(pagesInput.value),
        finished);

        // Clear the inputs
        clearInputs();

        addBook(newBook);
    })
}

function clearInputs() {
    let titleInput = document.getElementById("title");
    let authorInput = document.getElementById("author");
    let pagesInput = document.getElementById("pages");
    let finishedInput = document.getElementById("finished");

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    finishedInput.checked = false;

}

function removeBook() {

}


