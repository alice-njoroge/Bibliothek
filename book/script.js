import {fetchBookData} from "../api/api.js";

//render the book
const state = {
    bookData: null
};
const url = new URL(location.href)
const searchParams = new URLSearchParams(url.search)


function renderBook() {
    const {id, title} = state.bookData;
    const bookTitle = document.createElement('h1');
    bookTitle.innerText = title
    const bookImage = document.createElement('img')

    const bookContainer = document.getElementById('book-details');
    bookContainer.appendChild(bookTitle);

}

//fetch data from the server /book
async function fetchSingleBook(id) {
    const path = `/${id}`
    state.bookData = await fetchBookData(path);
    renderBook();

}

//update a single book
//bulk update
fetchSingleBook(searchParams.get('id'))