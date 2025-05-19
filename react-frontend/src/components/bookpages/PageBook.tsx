import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import OnePage from "./OnePage";

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

function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    window.location.href = "http://localhost:5173/book-data-page/" + value;
    console.log(event)
}

function MaxItem(): number {
  const { data } = useFetch<number>('http://localhost:3000/api/v1/books/maxItem');
  return data ?? 1;
}

function getCurrentPage(pageN:number) {
    try {
        const { data } = useFetch<BookI[]>(`http://localhost:3000/api/v1/books/query/?page=${pageN}&size=6`);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function PageBook() {
    let id = useParams().id;
    let pageN = id ? parseInt(id) : 1;
    let max = Math.round(MaxItem()/6);
    let data = getCurrentPage(pageN);
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

export default PageBook;