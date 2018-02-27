let myLibrary = [
    "Holes",
    "Of Mice and Men",
    "The Bible",
    "Romeo and Juliet"
];

// Display books in a list
const displayLibrary = () => {
    myLibrary.forEach((book) => {
        let li = document.createElement("li");
        let text = document.createTextNode(book);
        li.appendChild(text);
        document.getElementById("book-list").appendChild(li);
    });

}

// Add new book to list
const addBookToLibrary = () => {
    let newBook = document.getElementById("new-book").value;
    
    let li = document.createElement("li");
    let text = document.createTextNode(newBook);
    li.appendChild(text);
    document.getElementById("book-list").appendChild(li);
    clearTextbox();
};

// Clear textbox after submission
const clearTextbox = () => {
    document.getElementById("new-book").value= "";
};
