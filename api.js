async function fetchData(path = '', options = {}) {
    try {
        const response = await fetch( path, {
            headers: {
                'Content-Type': 'application/json'
            },
            ...options
        });
        if (!response.ok) {
            console.log('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("oops there was an issue with the fetch operation", error)
    }
}

const bookApiURL = 'http://localhost:4730/books';

export async function getBooks(options = {}) {
    return await fetchData(bookApiURL, options)
}
export async function getBooksById(path, options = {}) {
    return await fetchData(bookApiURL + path, options)
}
export async function updateBook(path, options){
    return await  fetchData(bookApiURL + path, {
        method: 'PUT',
        ...options
    })
}
export async function deleteBook(path, options){
    return await fetchData(bookApiURL + path, {
        method: 'DELETE',
        ...options
    })

}


//inheritance for all CRUD operations
//wish list
//cart - shopping

