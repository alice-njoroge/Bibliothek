import {deleteBook, getBooksById} from "../api.js";
import {renderNav} from "../module.js";

renderNav();

const state = {
    bookData: null
};
const url = new URL(location.href)
const searchParams = new URLSearchParams(url.search)


function renderBook() {
    const {id, title, cover, publisher, abstract} = state.bookData;
    const bookCover = document.createElement('img');
    bookCover.src = cover;
    bookCover.classList.add('cover-image')

    const bookTitle = document.createElement('h3');
    bookTitle.innerText = title

    const bookPublisher = document.createElement('h5');
    bookPublisher.innerText = publisher

    const abstractTextArea = document.createElement('span');
    abstractTextArea.innerText = abstract;

    const backButton = document.createElement('a');
    backButton.classList.add('primary-button')
    backButton.innerText = "Edit Book Details";
    backButton.href = `edit/index.html?id=${id}`

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('primary-button')
    deleteButton.innerText = "Delete Book"


    deleteButton.addEventListener('click', async function(){
        const path = `/${id}`;
        const deleted = await deleteBook(path);
        console.log('deleted', deleted)
        window.location.href = '../index.html'
    })


    const bookContainer = document.getElementById('book-details');
    bookContainer.append(bookCover, bookTitle, bookPublisher, abstractTextArea, backButton, deleteButton);

}

//fetch data from the server /book
async function fetchSingleBook(id) {
    const path = `/${id}`
    state.bookData = await getBooksById(path);
    renderBook();
}

//update a single book
//bulk update
fetchSingleBook(searchParams.get('id'))