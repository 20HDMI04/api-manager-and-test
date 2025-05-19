import { useParams } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Table from "./Table";
import useFetch from "../../hooks/useFetch";

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

function Book() {
    let params = useParams();
    const { data, error } = useFetch<BookI>('http://localhost:3000/api/v1/books/'+params.id);
    if (error) {
      console.error('Error fetching data:', error);
    }
    /*1952-01-01T00:00:00.000Z*/
    let date = data?.published ? new Date(data.published) : undefined;

    const rows: string[][] = [
      ["Title", `${data?.title}`],
      ["Author", `${data?.author}`],
      ["Created at", `${data?.createdAt.split("T")[0]} - ${data?.createdAt.split("T")[1].split(".")[0]}`],
      ["Updated at", `${data?.updatedAt.split("T")[0]} - ${data?.updatedAt.split("T")[1].split(".")[0]}`],
      ["Published", `${date?.getFullYear()}`],
      ["ID", `${params.id}`],
    ]
  return (
    <>
    <div className="w-[140vh] mx-auto flex items-center justify-center">
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3} className="flex items-center justify-center my-4">
            <img src={data?.cover} alt={data?.title} />
          </Col>
          <Col xs={12} md={9} lg={9} className="flex items-left justify-left my-4">
            <div className="flex flex-col items-left justify-top ms-5">
              <h1 className="text-1xl playfair-display-700 text-[var(--color-fontBold)]">{data?.title}</h1>
              <p className="text-lg playfair-display-400 text-[var(--color-fontBold)] ms-2"><span>{data?.author}</span> | <span>{date?.getFullYear()}</span></p>
              <p className="text-lg playfair-display-400 text-[var(--color-fontBold)] ms-2 overflow-y-auto h-[25vh]">{data?.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="ms-auto me-5 my-3 flex items-center justify-center w-[60vw]">
      <Table rows={rows} />
    </div>
    </>
  );
}

export default Book;