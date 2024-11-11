import {getBooks} from "./api.js";
import {renderNav} from "./module.js";

renderNav();

//create a single row
function createBookUI(book) {
    const {cover, title, author, price, isbn } = book;

    const article = document.createElement('article');
    article.classList.add('book');

    const  imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container')

    const image = document.createElement('img');
    //image.classList.add('book-img')
    image.src = cover;
    image.alt = 'book cover';
    imgDiv.append(image);

    const bookTitle = document.createElement('h3');
    bookTitle.innerText = title;

    const authorTag= document.createElement('h4');
    authorTag.innerText = author;

    const costTag = document.createElement('h4');
    costTag.innerText = price;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('book-actions')

    const addToCart = document.createElement('button');
    addToCart.classList.add('bag-btn');
    addToCart.innerText = "Add to Cart";
    addToCart.addEventListener('click', openCart);

    const aTag = document.createElement('a');
    aTag.href = `book/index.html?id=${book.id}`;
    aTag.textContent = "View Details";

    actionsDiv.append(aTag, addToCart)

    article.append(imgDiv, bookTitle, authorTag, costTag, actionsDiv );
    return article;
}

//render multiple rows to the UI
function addBooksToUI(books) {
    const bookCard = document.querySelector('.book-wrapper');

    for (let book of books) {
        let bookArticle = createBookUI(book);
        bookCard.append(bookArticle)
    }
}

function openCart (){
    document.querySelector('.cart-overlay').style.visibility = 'visible';
    document.querySelector('.cart').style.transform = 'translateY(0)';
}

//fetch the books from the api
async function fetchBooks() {
    const data = await getBooks();
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