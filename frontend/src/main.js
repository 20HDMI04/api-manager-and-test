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
    const searchInput = document.getElementById('search');


    const books = await loading();
    let store = new BookStatics(books);
    renderBooks(store.books);

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
          <p><strong>Megjelenés:</strong> ${book.published}</p>

          <button class="openDescription">Leírás</button>

        <div class="description">
            <div class="description-inner">
                <h2>Leírás</h2>
                <p class="desc">${book.description}</p>
                <button class="closeDescription">Bezárás</button>
            </div>
        </div><br>
        <div>
            <button id="modify-book" data-id="${book.id}">Módosít</button>
            <button id="delete-book" data-id="${book.id}">Törlés</button>
        </div>`;
            bookList.appendChild(card);
        });

        
        bookList.addEventListener('click', e => {
            const card = e.target.closest('.book-item');
            if (!card) return;

            
            if (e.target.matches('.openDescription')) {
                card.querySelector('.description').classList.add('open');
            }

            
            if (e.target.matches('.closeDescription')) {
                card.querySelector('.description').classList.remove('open');
            }
            
        });


        //cím szerinti keresés
        searchInput.addEventListener('input', e => {
            const term = e.target.value.trim();
            const filtered = term
                ? store.searchBookByTitle(term)
                : store.books;
            renderBooks(filtered);
        });
    }
});