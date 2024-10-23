//create a single row
function createTableRow(book) {
    //  <tr class="heading-data">
    //     <th>ISBN</th>
    //     <th>Title</th>
    //     <th>Details</th>
    //  </tr>

    const row = document.createElement('tr');

    const isbnCell = document.createElement('td');
    isbnCell.textContent = book.isbn;
    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    const detailsCell = document.createElement('td');

    //<a href="link">Text</a>
    const aTag = document.createElement('a');
    aTag.href = "about.html"
    aTag.textContent = book.id;
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
