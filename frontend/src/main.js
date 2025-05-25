import { Book, BookStatics } from '/public/BookClass.js';

const url = 'http://127.0.0.1:3000/api/v1/books/';
const bookList = document.querySelector('.book-list');
const searchInput = document.getElementById('search');
let store;

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
        
            <button class="openDescription">Leírás</button><br>
            <div>
                <button class="openModification" data-id="${book.id}">Módosít</button>
                <button class="delete-book" data-id="${book.id}">Törlés</button>
            </div>
        </div>

        <div class="description">
            <div class="description-inner">
                <h2>Leírás</h2>
                <p class="desc">${book.description}</p>
                <button class="closeDescription">Bezárás</button>
            </div>
        </div>
        <div class="modification">
            <form class="modification-inner">
                    <h2>Módosítás</h2>
                    <label for="title">Cím:</label>
                    <input type="text" id="title" name="title" required><br>

                    <label for="author">Szerző:</label>
                    <input type="text" id="author" name="author" required><br>
                    
                    <p>Leírás:</p>
                    <textarea id="description" name="description" required></textarea><br>

                    <label for="year">Kiadás éve:</label>
                    <input type="number" id="year" name="year" min="1450" max="2100" required><br>

                    <label for="image">Kép URL:</label>
                    <input type="url" id="image" name="image" required><br>

                    <button type="submit" class="submitModification">Módosítás</button>
                    <button class="closeModification">Mégsem</button>
            </form>
        </div>`
        bookList.appendChild(card);

    });
}

async function init() {
    const books = await loading();
    store = new BookStatics(books);
    renderBooks(store.books);

    //cím szerinti keresés
    searchInput.addEventListener('input', searchByTitle);

    bookList.addEventListener('submit', modifyBook);
    bookList.addEventListener('click', deleteBook);

    bookList.addEventListener('click', popUpWindow);;
}

function searchByTitle(e) {
    const term = e.target.value.trim();
    const filtered = term
        ? store.searchBookByTitle(term)
        : store.books;
    renderBooks(filtered);
}

async function modifyBook(e) {
    if (!e.target.matches('.modification-inner')) return;   

    const form = e.target;
    const modifyId = form.getAttribute('data-id');

    const response = await fetch(url + modifyId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: Number(modifyId),
            title: form.title.value,
            description: form.description.value,
            author: form.author.value,
            published: form.year.value + "-01-01T00:00:00.000Z",
            cover: form.image.value
        })
    });

    if (!response.ok) {
        alert("Hiba történt a módosítás során.");
        return;
    }

    form.closest('.modification').classList.remove('open');
    renderBooks(store.books);
}

async function deleteBook(e) {
    if (!e.target.matches('.delete-book')) return;
    const deleteId = e.target.getAttribute("data-id");
    const response = await fetch(url + deleteId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
        alert("Hiba történt...");
        return;
    }
    renderBooks(await loading());
}

function popUpWindow(e) {
    const card = e.target.closest('.book-item');
    if (!card) return;


    if (e.target.matches('.openDescription')) {
        card.querySelector('.description').classList.add('open');
    }

    if (e.target.matches('.closeDescription')) {
        card.querySelector('.description').classList.remove('open');
    }

    if (e.target.matches('.openModification')) {
        const popup = card.querySelector('.modification');
        popup.classList.add('open');

        popup.querySelector('#title').value = card.querySelector('h2').textContent;
        popup.querySelector('#author').value = card.querySelector('p strong').nextSibling.textContent.trim();
        popup.querySelector('#description').value = card.querySelector('.desc').textContent;
        popup.querySelector('#year').value = card.querySelector('p:nth-of-type(2)').textContent.replace('Megjelenés:', '').trim();
        popup.querySelector('#image').value = card.querySelector('img').src;

        popup.querySelector('form').setAttribute('data-id', e.target.getAttribute('data-id'));
    }

    if (e.target.matches('.closeModification')) {
        e.preventDefault();
        card.querySelector('.modification').classList.remove('open');
    }

}
document.addEventListener('DOMContentLoaded', init)