import {getBooks} from "./api.js";
import {renderNav} from "./module.js";
import {$creator, DOMCreator, DOMInstance} from "./DOMCreator.js"

renderNav();
const state = {
    bookData: null,
    cartItems: [],
};


/**
 * create a single book card
 * @param book
 * @returns {HTMLElement}
 */
function createBookUI(book) {
    const {cover, title, author, price, id } = book;

    const article = $creator('article', {class: 'book'})
    const  imgDiv = $creator('div', {class: 'img-container'})


    const image =  $creator('img', {src: cover, alt:'book cover'})
    DOMCreator.appendNode(imgDiv, image)
    //imgDiv.getNode().append(image.getNode())

    const bookTitle =  $creator('h3', {innerText: title});
    const authorTag =  $creator('h4', {innerText: author});
    const costTag =  $creator('h4', {innerText: price});

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('book-actions')

    const addToCart = $creator('button', {class:'bag-btn', innerText: "Add to Cart" })
    const addToCartButton =  addToCart.getNode()
   DOMCreator.eventListener(addToCartButton, 'click', function (){
        state.cartItems.push(book);
        addBookToCartUI();
        openCart();
    })

    const aTag = $creator(
        'a',
        {href:`book/index.html?id=${id}`, class: 'a-tag', textContent: "View Details" })
    const aTagNode = aTag.getNode()

    //  DOMCreator.appendNode(actionsDiv, [aTagNode, addToCartButton])

    DOMCreator.appendNode(article, [imgDiv, bookTitle, authorTag, costTag, actionsDiv])
    return article.getNode();
}

/**
 * render multiple rows to the UI
 * @param books
 */
function addBooksToUI(books) {
    const bookCard = document.querySelector('.book-wrapper');

    for (let book of books) {
        let bookArticle = createBookUI(book);
        bookCard.append(bookArticle)
    }
}
function singleCartItem (book){
    const {cover} = book;
    const cartCard = document.createElement('article');
    cartCard.classList.add('cart-item');

    const  imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container')

    const image = document.createElement('img');
    image.classList.add('book-img', 'cart-image')
    image.src = cover;
    image.alt = 'book cover';
    imgDiv.append(image);

    cartCard.append(imgDiv)
    return cartCard;
}

//TODO:you need to persist the data somehow, and figure out how to add more than one items
function addBookToCartUI(){
    const books = state.cartItems;
    const booksContainer =  document.querySelector('.cart-content');
    
    for (let book of books){
       let singleBookContainer = singleCartItem(book)
        booksContainer.append(singleBookContainer)
    }

}

/**
 * show the cart
 */

function openCart (){
    document.querySelector('.cart-overlay').style.visibility = 'visible';
    document.querySelector('.cart').style.transform = 'translateY(0)';
}

/**
 * hide the cart
 */
function closeCart(){
    document.querySelector('.cart-overlay').style.visibility = 'hidden';
    document.querySelector('.cart').style.transform = 'translateY(100%)'
}

document.querySelector('.close-cart').addEventListener('click', function() {
   closeCart();
})

//fetch the books from the api
async function fetchBooks() {
    const data = await getBooks();
    state.bookData = data;
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