export class BookStatics{
    constructor(list) {
        this.books = list;
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(id) {
        if (this.books.length === 0){
            throw new Error("Ures lista.");
        }
        this.books.remove(this.books[id]);
    }

    getBook(id){
        if (this.books.length === 0){
            throw new Error("Ures lista.");
        }
        return this.books[id];
    }

    searchBookByAuthor(author){
        if (this.books.length === 0){
            throw new Error("Ures lista.");
        }
        const foundBooks = this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
        return foundBooks;
    }

    searchBookByTitle(title){
        if (this.books.length === 0){
            throw new Error("Ures lista.");
        }
        const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        return foundBooks;
    }

    searchBookByPublishedYear(year){
        if (this.books.length === 0){
            throw new Error("Ures lista.");
        }
        const foundBooks = this.books.filter(book => book.year.toLowerCase().includes(year.toLowerCase()));
        return foundBooks;
    }

    descendingByPublishedYear(){
        if (this.books.length === 0){
            throw new Error("Ures lista.");
        }
        this.books.sort((a, b) => b.published - a.published);
    }

    ascendingByPublishedYear(){
        if (this.books.length === 0){
            throw new Error("Ures lista.");
        }
        this.books.sort((a, b) => a.published - b.published);
    }
    
}

export class Book {
    constructor(id, title, author, description, published, cover, createdAt, updatedAt) {
        this.id = parseInt(id);
        this.title = title;
        this.author = author;
        this.description = description;
        this.published = parseInt(published);
        this.cover = cover;
        this.createdAt = new Date(createdAt);
        this.updatedAt = new Date(updatedAt);
    }

    timeElapsedBetweenCreatedAndUpdated() {
        const timeDifference = this.updatedAt - this.createdAt;
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

        return `${daysDifference} nap telt el a létrehozás és a módosítás dátum között.`
    }

    ToString() {
        return `Könyv: ${this.id}, ${this.title}, ${this.author}, ${this.description}, ${this.published}, ${this.createdAt}, ${this.updatedAt}`;
    }

}