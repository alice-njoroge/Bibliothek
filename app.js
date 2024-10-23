
function addBooksToUI(books){
    let booksHTMLString = '';
    books.map(book => {
        let bookString = `
        <article>
            <h2>${book.isbn}</h2>
            <p>${book.title}</p>
        </article> `
        booksHTMLString += bookString
    });
    document.querySelector('.books-center').innerHTML = booksHTMLString;

}
//fetch the books from the api
async function fetchBooks() {
    try {
        const response = await fetch('http://localhost:4730/books');
        if (!response.ok) {
            console.log('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        addBooksToUI(data);

    } catch (error) {
        console.log("oops there was an issue with the fetch operation", error)
    }
}
fetchBooks();


//list all books in a table <title and ISBN> /index
//click on the details link for each book to see details page  /:id
// /books?id=isbn /books?id=12378547hjdk

//wishlist or already read function
//login
//filter out all books from a given user and give a discount of 20%
