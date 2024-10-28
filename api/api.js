
export async function fetchData(path = '', options = {}) {
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

export async function fetchBookData(path = '', options = {}) {
    const bookApiURL = 'http://localhost:4730/books';

    return await fetchData(bookApiURL + path, options)
}

//inheritance for all CRUD operations
//wish list
//cart - shopping

