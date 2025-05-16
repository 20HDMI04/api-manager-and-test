import { Book, BookStatics } from '/public/BookClass.js';

const url = 'http://127.0.0.1:3000/api/v1/books/';

async function loading() {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    if (!response.ok) {
        throw new Error('Hiba történt a könyvek lekérésekor.');
    }
    const json = await response.json();

    return json.map(b => new Book(
        b.id, b.title, b.author, b.description, b.published, b.cover, b.createdAt, b.updatedAt
    ));
}

document.addEventListener('DOMContentLoaded', async () => {
    const bookList = document.querySelector('.book-list');

    let store;
    try {
        const books = await loading();
        store = new BookStatics(books);
        renderBooks(store.books);
    } catch (err) {
        bookList.innerHTML = `<p class="error">${err.message}</p>`;
        console.error(err);
        return;
    }

    function renderBooks(books) {
        bookList.innerHTML = '';
        if (books.length === 0) {
            bookList.innerHTML = '<p>Nincs találat.</p>';
            return;
        }
        books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-item';
            card.innerHTML = `
        <div class="book-image">
          <img src="${book.cover}" alt="${book.title}">
        </div>
        <div class="book-content">
          <h2>${book.title}</h2>
          <p><strong>Szerző:</strong> ${book.author}</p>
          <p><strong>Megjelenés:</strong> ${new Date(book.published).toLocaleDateString()}</p>
          <p class="desc">${book.description}</p>
          <button class="add-to-cart" data-id="${book.id}">🛒 Kosárba</button>
        </div>
      `;
            bookList.appendChild(card);
        });
    }
});