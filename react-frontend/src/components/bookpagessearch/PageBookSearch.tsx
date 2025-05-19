import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import OnePage from "./OnePageSearch";

interface BookI {
    "id": number,
    "title": string,
    "description": string,
    "author": string,
    "published": string,
    "cover": string,
    "updatedAt": string,
    "createdAt": string
}

interface BookSearchI {
    "bookArray": BookI[],
    "allPages": number
}

function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    let query = localStorage.getItem("query");
    window.location.href = `http://localhost:5173/book-data-search-page/${value}/${query}`;
    console.log(event);
    localStorage.removeItem("query");
}

function getCurrentPage(pageN:number, query: string="") {
    try {
        const { data } = useFetch<BookSearchI>(`http://localhost:3000/api/v1/books/query-search/?page=${pageN}&size=6&search=${query}`);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


function PageBookSearch() {
    let id = useParams().id;
    let pageN = id ? parseInt(id) : 1;
    let query = useParams().query;
    let request = getCurrentPage(pageN, query);

    localStorage.setItem("query", query!.toString());

    let max = request?.allPages;
    let data = request?.bookArray;
    console.log(data);
  return (
    <div className="w-[140vh] mx-auto items-center justify-center h-[100%]">
        <div className="w-[100%] h-[60vh] flex items-center justify-center">
            <OnePage dataList={data ?? []} />
        </div>
        <div className="flex items-center justify-center w-[100%] h-[10vh]">
            <Pagination count={max} page={pageN} onChange={handleChange} className="mt-auto mb-0 mx-auto"/>
        </div>
    </div>
  );
}

export default PageBookSearch;