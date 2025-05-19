import SearchMainContent from './searchMainContent';
import MainBook from './MainBook';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBarCards from './SearchBarCards';

interface ifOrnotSeachingProps {
    searching: Boolean;
    list: MainBook;
    searchTerm: string;
}

function ifOrnotSeaching({searching, list, searchTerm}: ifOrnotSeachingProps) {
    if (searching) {
        let allBooks = SearchMainContent({ data: list, props: searchTerm });
        if (allBooks.length === 0) {
            return (
                <div className='w-[26.45vw] pb-auto mt-[2.5px] flex items-center justify-center bg-[var(--color-backSearch)] z-1'>
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    <p className='playfair-display-700 text-[var(--color-fontBold)]'>No results found</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            )
        } else {
            allBooks = allBooks.slice(0, 5);
            return (
            <div className='w-[26.45vw] pb-auto mt-[2.5px] flex items-center justify-center bg-[var(--color-backSearch)] z-1'>
                <Container className='w-full flex items-center justify-center m-1'>
                    <SearchBarCards allBooks={allBooks}/>
                </Container>
            </div>
        )}
    } else {
        return (
            <></>
        )
    }
}

export default ifOrnotSeaching;