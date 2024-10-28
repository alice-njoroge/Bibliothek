import {inputRender} from './module.js'
import {fetchBookData} from "../../api/api.js";

//render the book
const state = {
    bookData: null,
    currentBookId: -1
};
const url = new URL(location.href)
const searchParams = new URLSearchParams(url.search)

// < form >
//    < label for= "title" > Book Title < /label>
//     <input id="title"/>
// </form>

function renderBook() {
    const {title, subtitle, abstract, numPages} = state.bookData;
    const form = document.createElement('form');
    form.classList.add('form-wrapper')

    const formTitle = document.createElement('h2')
    formTitle.textContent = "Update Book Details"
    formTitle.classList.add('title')

    const {
        divBlock: titleInputBlock,
        inputElement: titleInputElement
    } = inputRender('title', title, 'input', 'text');
    const {
        divBlock: subTitleInputBlock,
        inputElement: subTitleInputElement
    } = inputRender('Sub Title', subtitle, 'input', 'text');
    const {
        divBlock: abstractInputBlock,
        inputElement: abstractInputElement
    } = inputRender('abstract', abstract, 'textarea', '');
    const {
        divBlock: pageNumberInputBlock,
        inputElement: pageNumberInputElement
    } = inputRender('Number of Pages',numPages ,'input', 'number')

    const submitButton = document.createElement('button');
    submitButton.innerText = 'submit'
    form.append(formTitle, titleInputBlock, subTitleInputBlock, abstractInputBlock, pageNumberInputBlock, submitButton);

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const updatedFormData = {
            ...state.bookData,
            title: titleInputElement.value,
            subtitle: subTitleInputElement.value,
            abstract: abstractInputElement.value,
            numPages: pageNumberInputElement.value
        }
        const path =  `/${state.currentBookId}`

        const response = await fetchBookData(path, {
            method: 'PUT',
            body: JSON.stringify(updatedFormData)
        });
        //images - the api won't allow you to change >> convert to base64

    })

    const bookContainer = document.getElementById('book-update-form');
    bookContainer.appendChild(form);

}

//fetch data from the server /book
async function fetchSingleBook(id) {
    const path = `/${id}`
    state.bookData = await fetchBookData(path);
    renderBook();

}

//update a single book
//bulk update
state.currentBookId = searchParams.get('id')
fetchSingleBook(state.currentBookId)


