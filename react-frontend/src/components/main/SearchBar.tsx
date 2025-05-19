import React from 'react';
import { useState } from 'react';
import MainBook from './MainBook';
import IfOrNotSearching from './IfOrNot';
import { Container, Row, Col } from 'react-bootstrap';

interface SearchBarProps {
    list: MainBook;
}
let searching: Boolean = false;

function SearchBar({ list }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        searching = event.target.value.length > 0;
    };

    const handleSearch = () => {
        window.location.href = `http://localhost:5173/book-data-search-page/1/${searchTerm}`;
    };

    return (
        <>
            <div>
                <Container className='w-full mx-auto mt-[2vh]'>
                    <Row className='w-3/4 mx-auto mt-[2vh]'>
                        <Col xs={12} md={12} lg={12} className='flex items-center'>
                            <input type="text" placeholder="Search..." className="border border-[var(--color-borderSearch)] w-full py-2 bg-[var(--color-backSearch)] px-2" onChange={handleInputChange}/>
                            <button className="ml-2 bg-[var(--color-searchIcon)] text-white px-[3vw] py-2 border border-[var(--color-borderSearch)]" onClick={handleSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-backSearch)"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                            </button>
                        </Col>
                        <Col xs={12} md={12} lg={12} className='flex items-center justify-center mt-[2vh] relative z-1'>
                            <div className='fixed translate-y-1/2'>
                                <IfOrNotSearching searching={searching} list={list} searchTerm={searchTerm}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}



export default SearchBar;

