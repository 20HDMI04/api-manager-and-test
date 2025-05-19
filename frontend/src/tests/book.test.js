import {expect, it, describe} from "vitest";
import {BookStatics, Book} from "../../public/BookClass.js";


let list = [ 
    {    "id": 1,    "title": "The Old Man and the Sea",    "description": "Santiago, an old and once great fisherman, has gone 84 days without catching a fish. His only friend, a loyal boy, takes care of him. To break his unlucky streak, Santiago takes his boat further than he ever has before and spends three days battling a giant marlin.",    "author": "Ernest Hemingway",    "published": "1952-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/99626919-f117-45d9-84f8-f19c222e2a04/1200/1200/False/the-old-man-and-the-sea-70.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  },
    {    "id": 2,    "title": "Don Quixote",    "description": "Don Quixote has become so entranced by reading romances of chivalry that he determines to become a knight errant and pursue bold adventures, accompanied by his squire, the cunning Sancho Panza. As they roam the world together, the aging Quixote`s fancy leads them wildly astray, tilting at windmills, fighting with friars, and distorting the rural Spanish landscape into a fantasy of impenetrable fortresses and wicked sorcerers.",    "author": "Miguel de Cervantes",    "published": "1605-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/392971e9-4f19-4827-a041-3abe4d0e1f54/1200/1200/False/don-quixote-111.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  }
]
let list1 = []
let list2 = [
    {    "id": 2,    "title": "Don Quixote",    "description": "Don Quixote has become so entranced by reading romances of chivalry that he determines to become a knight errant and pursue bold adventures, accompanied by his squire, the cunning Sancho Panza. As they roam the world together, the aging Quixote`s fancy leads them wildly astray, tilting at windmills, fighting with friars, and distorting the rural Spanish landscape into a fantasy of impenetrable fortresses and wicked sorcerers.",    "author": "Miguel de Cervantes",    "published": "1605-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/392971e9-4f19-4827-a041-3abe4d0e1f54/1200/1200/False/don-quixote-111.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  },
    {    "id": 1,    "title": "The Old Man and the Sea",    "description": "Santiago, an old and once great fisherman, has gone 84 days without catching a fish. His only friend, a loyal boy, takes care of him. To break his unlucky streak, Santiago takes his boat further than he ever has before and spends three days battling a giant marlin.",    "author": "Ernest Hemingway",    "published": "1952-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/99626919-f117-45d9-84f8-f19c222e2a04/1200/1200/False/the-old-man-and-the-sea-70.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  },
]
let list3 = [
    {    "id": 1,    "title": "The Old Man and the Sea",    "description": "Santiago, an old and once great fisherman, has gone 84 days without catching a fish. His only friend, a loyal boy, takes care of him. To break his unlucky streak, Santiago takes his boat further than he ever has before and spends three days battling a giant marlin.",    "author": "Ernest Hemingway",    "published": "1952-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/99626919-f117-45d9-84f8-f19c222e2a04/1200/1200/False/the-old-man-and-the-sea-70.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  },
    {    "id": 2,    "title": "Don Quixote",    "description": "Don Quixote has become so entranced by reading romances of chivalry that he determines to become a knight errant and pursue bold adventures, accompanied by his squire, the cunning Sancho Panza. As they roam the world together, the aging Quixote`s fancy leads them wildly astray, tilting at windmills, fighting with friars, and distorting the rural Spanish landscape into a fantasy of impenetrable fortresses and wicked sorcerers.",    "author": "Miguel de Cervantes",    "published": "1605-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/392971e9-4f19-4827-a041-3abe4d0e1f54/1200/1200/False/don-quixote-111.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  },
    {    "id": 3,    "title": "The Old Man and the Sea",    "description": "Santiago, an old and once great fisherman, has gone 84 days without catching a fish. His only friend, a loyal boy, takes care of him. To break his unlucky streak, Santiago takes his boat further than he ever has before and spends three days battling a giant marlin.",    "author": "Ernest Hemingway",    "published": "1952-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/99626919-f117-45d9-84f8-f19c222e2a04/1200/1200/False/the-old-man-and-the-sea-70.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  },
    {    "id": 4,    "title": "Don Quixote",    "description": "Don Quixote has become so entranced by reading romances of chivalry that he determines to become a knight errant and pursue bold adventures, accompanied by his squire, the cunning Sancho Panza. As they roam the world together, the aging Quixote`s fancy leads them wildly astray, tilting at windmills, fighting with friars, and distorting the rural Spanish landscape into a fantasy of impenetrable fortresses and wicked sorcerers.",    "author": "Miguel de Cervantes",    "published": "1605-01-01T00:00:00.000Z",    "cover": "https://cdn.kobo.com/book-images/392971e9-4f19-4827-a041-3abe4d0e1f54/1200/1200/False/don-quixote-111.jpg",    "updatedAt": "2025-04-21T18:29:28.834Z",    "createdAt": "2025-04-21T18:29:28.834Z"  }
]
let bookStatics = new BookStatics(list)
let bookStatics1 = new BookStatics(list1)
let bookStatics2 = new BookStatics(list2)
let bookStatics3 = new BookStatics(list3) 

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
        expect(
            () => {bookStatics.removeBook(2)}
        ).toThrowError("Listan kivul.")
    })
})

describe('getBook', () => {
    it('should get the correct book with the correct id, if not empty', () => {
        expect(bookStatics.getBook(0)).toEqual(list[0])
    })
    it('should throw an error, if the list is empty', () => {
        expect(
            () => { bookStatics1.getBook(1)}   
        ).toThrowError("Ures lista.")
    })
    it('should throw an error, if the id is out of range', () => {
        expect(
            () => {bookStatics.getBook(2)}
        ).toThrowError("Listan kivul.")
    })
})

describe('searchBookByAuthor', () => {
    it('should get the correct list, if not empty', () => {
        expect(bookStatics.searchBookByAuthor("Miguel de Cervantes"))
        .toEqual([list[1]])
    })
    it('should throw an error, if the list is empty', () => {
        expect(
            () => { bookStatics1.searchBookByAuthor("Miguel de Cervantes")}
        ).toThrowError("Ures lista.")
    })
    it('should throw an error, if the author is not in the list', () => {
        expect(
            () => {bookStatics.searchBookByAuthor("Franz Kafka")}
        ).toThrowError("Listan kivul.")
    })
    it('should get all correct books, if there are multiple', () => {
        expect(bookStatics3.searchBookByAuthor("Ernest Hemingway"))
        .toEqual([list3[0], list3[2]])
    }) 
})

describe('searchBookByTitle', () => {
    it('should get the correct list, if not empty', () => {
        expect(bookStatics.searchBookByTitle("The Old Man and the Sea")).toEqual([list[0]])
    })
    it('should throw an error, if the list is empty', () => {
        expect(
            () => {bookStatics1.searchBookByTitle("The Old Man and the Sea")}
        ).toThrowError("Ures lista.")
    })
    it('should throw an error, if the title is not in the list', () => {
        expect(
            () => {bookStatics.searchBookByAuthor("Metamorphosis")}
        ).toThrowError("Listan kivul.")
    })
    it('should get all correct books, if there are multiple', () => {
        expect(bookStatics3.searchBookByTitle("Don Quixote")).toEqual([list3[1], list3[3]])
    })
})

describe('searchBookByPublishedYear', () => {
    it('should get the correct list, if not empty', () => {
        expect(bookStatics.searchBookByPublishedYear("1952-01-01T00:00:00.000Z")).toEqual([list[0]])
    })
    it('should throw an error, if the list is empty', () => {
        expect(
            () => {bookStatics1.searchBookByPublishedYear("1952-01-01T00:00:00.000Z")}
        ).toThrowError("Ures lista.")
    })
    it('should throw an error, if the year is not in the list', () => {
        expect(
            () => {bookStatics.searchBookByPublishedYear("2020-01-01T00:00:00.000Z")}
        ).toThrowError("Listan kivul.")
    })
    it('should get all correct books, if there are multiple', () => {
        expect(bookStatics3.searchBookByPublishedYear("1605-01-01T00:00:00.000Z")).toEqual([list3[1], list3[3]])
    })
})

describe('descendingByPublishedYear', () => {
    it('should get the correct list, if not empty', () => {
        bookStatics2.descendingByPublishedYear() 
        expect(bookStatics2).toEqual(bookStatics)
    })
    it('should throw an error, if the list is empty', () => {
        expect(
            () => {bookStatics1.descendingByPublishedYear()}
        ).toThrowError("Ures lista.")
    })
})

describe('ascendingByPublishedYear', () => {
    it('should get the correct list, if not empty', () => {
        bookStatics.ascendingByPublishedYear() 
        expect(bookStatics).toEqual(bookStatics2)
    })
    it('should throw an error, if the list is empty', () => {
        expect(
            () => {bookStatics1.descendingByPublishedYear()}
        ).toThrowError("Ures lista.")
    })
})