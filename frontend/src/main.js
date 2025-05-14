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

document.addEventListener('DOMContentLoaded', init);