
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


function SearchMainContent({ data, props }: { data: MainBook, props:string }): Book[] {
    const latest = data?.latestBooks
    const classic = data?.classicBooks
    const best = data?.bestBooks

    console.log(props)
    const books: Book[] = latest.concat(classic, best)
    const allBooks:any = []

    for (const e_outer of books) {
        if (inOrnot(e_outer, allBooks)) {
            continue;
        }
        allBooks.push(e_outer)
    }

    if (props === "") {
        return allBooks;
    }
    return allBooks.filter((e:any) => {
        return e.title.toLowerCase().includes(props.toLowerCase()) || e.author.toLowerCase().includes(props.toLowerCase())
    });
}

function inOrnot(e_outer: Book, allBooks: Book[]): Boolean {
    for (const e_inner of allBooks) {
        if (e_outer.id === e_inner.id) {
            return true;
        }
    }
    return false;
}



export default SearchMainContent