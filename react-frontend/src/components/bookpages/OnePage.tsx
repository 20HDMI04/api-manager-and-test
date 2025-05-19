import { Col, Container, Row } from "react-bootstrap";

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

interface OnePageProps {
    dataList: BookI[];
}


function OnePage(OnePageProps: OnePageProps) {
    console.log(OnePageProps.dataList);
  return (
    
    <div className="overflow-y-scroll w-[100%] h-[50vh]">
      {OnePageProps.dataList.map((data) => (
        <a href={"http://localhost:5173/book-data/"+data.id} key={data.id}>
        <div className="items-center justify-center my-3 w-[30vw] mx-auto h-[16vh] bg-[var(--color-creamySecondary)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Container>
            <Row>
                <Col xs={2} md={3} lg={3} className="my-1">
                    <img src={data.cover} alt={data.title} className="h-[100px]"/>
                </Col>
                <Col>
                    <p className="playfair-display-700 text-[var(--color-fontBold)]">{data.title}</p>
                    <p className="playfair-display-400 text-[var(--color-fontLighter)]">{data.author}</p>
                </Col>
            </Row>
          </Container>
        </div>
    </a>
      ))}
    </div>
  );
}
export default OnePage;