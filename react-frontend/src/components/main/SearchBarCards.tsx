import { Row, Col, Container } from "react-bootstrap";
import React from "react";

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

interface SearchBarCardsProps {
    allBooks: Book[];
}


function SearchBarCards({ allBooks }: SearchBarCardsProps): React.ReactElement {
    console.log(allBooks)
    return (
        <div>
            {allBooks.map((book) => (
                <a href={"http://localhost:5173/book-data/"+book.id}>
                    <Row key={book.id}>
                    <Col xs={3} md={3} lg={3} className='flex items-center justify-center'>
                        <img src={book.cover} alt={book.title} className='w-3/4 my-1'/>
                    </Col>
                    <Col xs={9} md={9} lg={9}>
                        <Container>
                            <Row>
                                <Col xs={12} md={12} lg={12} className='w-full flex items-bottom justify-left max-h-[5vh]'>
                                    <p className='playfair-display-700 text-[var(--color-fontBold)] m-0 pt-2 overflow-y-hidden'>{book.title}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} lg={12} className='w-full flex items-top justify-left'>
                                    <p className='playfair-display-400 text-[var(--color-fontLighter)] m-0 pb-2 overflow-y-hidden'>{book.author}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                </a>
            ))}
        </div>
    );
}


export default SearchBarCards;