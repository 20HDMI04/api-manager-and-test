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
      </Routes>
    </Router>
    
  )
}

export default App
