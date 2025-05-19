interface MainBook {
    latestBooks: Book[];
    classicBooks: Book[];
    bestBooks: Book[];
  }
  
interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    published_date: string;
    cover: string;
    createdAt: string;
    updatedAt: string;
}

export default MainBook;