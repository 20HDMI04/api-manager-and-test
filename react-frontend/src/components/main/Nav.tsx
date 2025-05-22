import IMGS from '../../constants/images';
import SearchBar from './SearchBar';
import MainBook from './MainBook';

interface NavProps {
    list: MainBook;
}

function Nav({list}: NavProps) {
    return (
        <div className='w-[150vh] mx-auto mb-[2vh]'>
            <div className="h-[15vh] flex items-center justify-between px-4">
                <img src={IMGS.logo} alt="logo" className='w-[30vh]'/>
                <div className='w-[40vw]'>
                    <SearchBar list={list}/>
                </div>
                <div className='flex items-center'>
                    <button>
                        <span className='playfair-display-700 text-[var(--color-fontBold)]'>Login</span>
                        <span className='playfair-display-400 text-[var(--color-fontLighter)]'>/ Register</span>
                    </button>
                    <p className='mx-2 playfair-display-700 text-[var(--color-fontBold)] text-2xl h-4'>|</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className='pt-1' height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-fontBold)"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/></svg>
                    </button>
                </div>
            </div>
            <div className="h-[5vh] my-2 flex px-5">
                    <a href="/" className="pt-1 playfair-display-sc-regular">Home</a>
                    <p className='mx-3 playfair-display-700 text-[var(--color-fontBold)] text-2xl'>|</p>
                    <a href="/about" className="pt-1 playfair-display-sc-regular">About</a>
                    <p className='mx-3 playfair-display-700 text-[var(--color-fontBold)] text-2xl'>|</p>
                    <a href="/book-data-page/1" className="pt-1 playfair-display-sc-regular">Books</a>
            </div>
        </div>
    );
}

export default Nav;