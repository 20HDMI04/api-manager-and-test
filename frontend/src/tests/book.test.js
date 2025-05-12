import {expect, it, describe} from "vitest";
import {BookStatics, Book} from "../../public/BookClass.js";


let list = [  {    "id": 1,    "title": "The Old Man and the Sea",    "description": "Santiago, an old and once great fisherman, has gone 84 days without catching a fish. His only friend, a loyal boy, takes care of him. To break his unlucky streak, Santiago takes his boat further than he ever has before and spends three days battling a giant marlin.",    "author": "Ernest Hemingway",    "published": "1952-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/99626919-f117-45d9-84f8-f19c222e2a04/1200/1200/False/the-old-man-and-the-sea-70.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  },
      {    "id": 2,    "title": "Don Quixote",    "description": "Don Quixote has become so entranced by reading romances of chivalry that he determines to become a knight errant and pursue bold adventures, accompanied by his squire, the cunning Sancho Panza. As they roam the world together, the aging Quixote`s fancy leads them wildly astray, tilting at windmills, fighting with friars, and distorting the rural Spanish landscape into a fantasy of impenetrable fortresses and wicked sorcerers.",    "author": "Miguel de Cervantes",    "published": "1605-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/392971e9-4f19-4827-a041-3abe4d0e1f54/1200/1200/False/don-quixote-111.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  }
    ]
let list1 = []
const bookStatics = new BookStatics(list)
const bookStatics1 = new BookStatics(list1)

describe('removeBook', () => {
    it('should remove correct book, if not empty', () => {
        bookStatics.removeBook(1)
    })
    it('should throw an error, if the list is empty', () => {
        expect(
            () => {bookStatics1.removeBook(1)}
            ).toThrowError("Ures lista.")
    })
    it('should throw an error, if the id is out of range', () => {
        expect(bookStatics.removeBook(2)).toThrowError("Listan kivul")
    })
})

describe('getBook', () => {
    it('should get correct book with the correct id, if not empty', () => {
        expect(bookStatics.getBook(0)).toBe(list[0])
    })
    it('should throw an error, if the list is empty', () => {
        expect(
            () => { bookStatics1.getBook(1)}   
            ).toThrowError("Ures lista.")
    })
    it('should throw an error, if the id is out of range', () => {
        expect(bookStatics.getBook(2)).toThrowError("Listan kivul")
    })
})