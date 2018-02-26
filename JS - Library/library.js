let myLibrary = [
    "Holes",
    "Of Mice and Men",
    "The Bible",
    "Romeo and Juliet"
];

// Display books in a list
const displayList = () => {
    myLibrary.forEach((book) => {
        let li = document.createElement("li");
        let text = document.createTextNode(book);
        li.appendChild(text);
        document.getElementById("book-list").appendChild(li);
    });

}

// Add new book to list
const addBookToLibrary = () => {
    let x =[];
    let newBook = document.getElementById("new-book").value;

    //Push new book to array
    myLibrary.push(newBook);
    console.log("book added");
    console.log(myLibrary);
    document.getElementById("book-list").appendChild(li);
};