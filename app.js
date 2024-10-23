
function addBooksToUI(books){
    let tableRowHTMLString = '';
    for(let book of books){
        let rowString = `
        <tr>
            <td>${book.isbn}</td>
            <td>${book.title}</td>
            <td>Deets</td>
        </tr>`
        tableRowHTMLString += rowString
    }
    document.querySelector('.books-rows').innerHTML = tableRowHTMLString;

}
//fetch the books from the api
async function fetchBooks() {
    try {
        const response = await fetch('http://localhost:4730/books');
        if (!response.ok) {
            console.log('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data)
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
