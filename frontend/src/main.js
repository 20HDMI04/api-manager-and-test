import './style.css'

const loading = async () => {
    const url = 'http://127.0.0.1:3000/api/v1/books/';
    const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            }
        });
    if (!response.ok) { throw new Error("Hiba történt..."); }
    const json = await response.json();
    return json;
}

async function init(){
    const bookList = document.querySelector('.book-list');
    await loading()
        .then((data) => {
            data.forEach((book) => {
                const bookItem = document.createElement('div');
                bookItem.classList.add('book-item');
                bookItem.innerHTML = `
                    <img src="${book.cover}" alt="${book.title}">
                    <h2>${book.title}</h2>
                    <p>${book.description}</p>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Published:</strong> ${new Date(book.published).toLocaleDateString()}</p>
                `;
                bookList.appendChild(bookItem);
            });
        })
        .catch((error) => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', init);