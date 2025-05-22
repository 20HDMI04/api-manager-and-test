import './App.css'
import Slider from './components/main/Slider'
import Nav from './components/main/Nav'
import BooksSlider from './components/main/BooksSlider'
import Bottom from './components/main/Bottom'
import IMGS from './constants/images';
import useFetch from './hooks/useFetch';
import Book from './components/bookofdata/Book'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PageBook from './components/bookpages/PageBook';
import PageBookSearch from './components/bookpagessearch/PageBookSearch'
import AboutPage from './components/aboutPage/AboutPage'
import { Col, Container, Row } from 'react-bootstrap'


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

function App() {
  const { data, error } = useFetch<MainBook>('http://localhost:3000/api/v1/books/main_content/');
  console.log(data);
  if (error) {
    console.error('Error fetching data:', error);
  }
  if (!data) {
    return <div className="w-full h-[92vh] flex items-center justify-center">Loading...</div>;
  }

  const latestItems = data?.latestBooks.map((book) => (
    <a href={"http://localhost:5173/book-data/"+book.id}><img src={book.cover} alt={book.title} className='w-[25vh]' /></a>
  )) || [];

  const classicItems = data?.classicBooks.map((book) => (
    <a href={"http://localhost:5173/book-data/"+book.id}><img src={book.cover} alt={book.title} className='w-[25vh]' /></a>
  )) || [];

  const bestItems = data?.bestBooks.map((book) => (
    <a href={"http://localhost:5173/book-data/"+book.id}><img src={book.cover} alt={book.title} className='w-[25vh]' /></a>
  )) || [];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <div className="bg-[var(--color-creamy)] w-full h-[92vh]">
              <Nav list={data}/> 
              <Slider />
            </div>
            <div className="bg-[var(--color-creamySecondary)] w-full h-[92vh]">
              <BooksSlider title='Latest Books' items={latestItems} />
              <img src={IMGS.advertisement_1} alt="advertisement" className='w-[80vw] mx-auto mt-[3vh]'/>
              <BooksSlider title='Classics' items={classicItems} />
            </div>
            <div className="w-full h-[92vh]">
              <div className='my-[50vh]'></div>
              <img src={IMGS.advertisement_2} alt="advertisement" className='w-[80vw] mx-auto mt-[3vh]'/>
              <BooksSlider title='Best Sellers' items={bestItems} />
            </div>
            <div className='w-full'>
              <Bottom />
            </div>
          </>
        } />
        <Route path="/book-data/:id" element={
          <>
            <div className="bg-[var(--color-creamy)] w-full h-[85vh]">
                <Nav list={data}/>
                <Book />
            </div>
            <div className="bg-[var(--color-creamySecondary)] w-full h-[45vh] ">
            </div>
            <div className=" w-full h-[82vh] ">
              <img src={IMGS.advertisement_1} alt="advertisement" className='w-[80vw] mx-auto mt-3'/>
              <BooksSlider title='Best Sellers' items={bestItems} />
            </div>
            <div className='w-full'>
              <Bottom />
            </div>
          </>
        } />
        <Route path="/book-data-page/:id" element={
          <>
            <div className="bg-[var(--color-creamy)] w-full h-[85vh]">
                <Nav list={data}/>
                <PageBook />
            </div>
            <div className="bg-[var(--color-creamySecondary)] w-full h-[10vh] ">
            </div>
            <div className='w-full'>
              <Bottom />
            </div>
          </>
        } />
        <Route path="/book-data-search-page/:id/:query" element={
          <>
            <div className="bg-[var(--color-creamy)] w-full h-[85vh]">
                <Nav list={data}/>
                <PageBookSearch />
            </div>
            <div className="bg-[var(--color-creamySecondary)] w-full h-[10vh] ">
            </div>
            <div className='w-full'>
              <Bottom />
            </div>
          </>
        } />
        <Route path="/about" element={
          <>
            <div className="bg-[var(--color-creamy)] w-full h-[60vh]">
                <Nav list={data}/>
                <div className="w-full flex flex-col items-center justify-center">
                  <AboutPage direction={true} delay={0.5}/>
                  <h1 className="text-4xl font-bold mt-5 playfair-display-700">About Us</h1>
                  <AboutPage direction={false} delay={0.25}/>
                </div>
            </div>
            <div className="bg-[var(--color-creamySecondary)] w-full h-[130vh]">
              <Container>
                <Row>
                  <Col>
                    <img src="https://cdn.pixabay.com/photo/2016/03/28/14/19/destination-1285851_1280.png" alt="goal" className='rounded-full w-3/4 h-auto mx-auto my-5' />
                  </Col>
                  <Col>
                    <h1 className="text-4xl font-bold mt-5 playfair-display-700">Our Goal</h1>
                    <p className="text-lg mt-3 playfair-display-400">Our goal is to provide a platform where readers can easily find and explore a wide range of books, from the latest bestsellers to timeless classics. We aim to create a community of book lovers who can share their thoughts and recommendations, making the reading experience more enjoyable for everyone.</p>
                    <p className="text-lg mt-3 playfair-display-400">We believe that books have the power to inspire, educate, and entertain, and we are committed to making them accessible to all. Whether you're a casual reader or a passionate bibliophile, we hope to be your go-to destination for all things books.</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h1 className="text-4xl font-bold mt-5 playfair-display-700">Our Plan</h1>
                    <p className="text-lg mt-3 playfair-display-400">Our plan is to continuously improve our platform by adding new features and functionalities that enhance the user experience. We aim to expand our book collection, provide personalized recommendations, and foster a vibrant community of readers.</p>
                    <p className="text-lg mt-3 playfair-display-400">We also plan to collaborate with authors, publishers, and other stakeholders in the book industry to bring you exclusive content, events, and promotions. Our ultimate goal is to create a one-stop-shop for all your reading needs.</p>
                  </Col>
                  <Col>
                    <img src="https://cdn.pixabay.com/photo/2023/05/01/17/34/data-7963502_1280.png" alt="goal" className='rounded-full w-3/4 h-auto mx-auto my-5' />
                  </Col>
                </Row>
              </Container>
              <AboutPage direction={true} delay={0.5}/>
            </div>
            <div className='w-full'>
              <Bottom />
            </div>
          </>
        } />
      </Routes>
    </Router>
    
  )
}

export default App
