import {fetchBookData} from "./api/api.js";

//create a single row
function createTableRow(book) {
    //  <tr class="heading-data">
    //     <td>ISBN</td>
    //     <td>Title</td>
    //     <td>Details</td>
    //  </tr>

    const row = document.createElement('tr');

    const isbnCell = document.createElement('td');
    isbnCell.textContent = book.isbn;
    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    const detailsCell = document.createElement('td');

    //<a href="link">Text</a>
    const aTag = document.createElement('a');
    aTag.href = `book/index.html?id=${book.id}`;
    aTag.textContent = "View Details";
    detailsCell.appendChild(aTag);

    row.appendChild(isbnCell);
    row.appendChild(titleCell);
    row.appendChild(detailsCell);

    return row;
}

//render multiple rows to the UI
function addBooksToUI(books) {
    const tableRow = document.querySelector('.books-rows');
    for (let book of books) {
        let bookRow = createTableRow(book);
        tableRow.appendChild(bookRow);
    }
}

//fetch the books from the api
async function fetchBooks() {
    const data = await fetchBookData();
    addBooksToUI(data);
}

fetchBooks();


//list all books in a table <title and ISBN> /index
//click on the details link for each book to see details page  /:id
// /books?id=isbn /books?id=12378547hjdk

//wishlist or already read function
//login
//filter out all books from a given user and give a discount of 20%

//http://localhost:63342/books/?=1001606140805
//http://localhost:63342/Bibliothek/index.html?_ijt=jokr9e26bbdbj6c52db0nak5lg&_ij_reload=RELOAD_ON_SAVE