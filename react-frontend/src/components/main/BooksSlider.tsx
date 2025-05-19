
import { useState, useRef, useEffect } from "react";

function BooksSlider({title, items}:{title: string, items: any[]}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemWidthRef = useRef(0);

  useEffect(() => {
    if (containerRef.current && items.length > 0) {
      const firstItem = containerRef.current.children[0];
      itemWidthRef.current = firstItem instanceof HTMLElement ? firstItem.offsetWidth : 0;
    }
  }, [items]);

  const next = () => {
    if (containerRef.current && itemWidthRef.current > 0) {
      const nextIndex = Math.min(currentIndex + 1, items.length - getVisibleItemsCount());
      setCurrentIndex(nextIndex);
      containerRef.current.style.transform = `translateX(-${nextIndex * itemWidthRef.current}px)`;
    }
  };

  const prev = () => {
    if (containerRef.current && itemWidthRef.current > 0) {
      const prevIndex = Math.max(currentIndex - 1, 0);
      setCurrentIndex(prevIndex);
      containerRef.current.style.transform = `translateX(-${prevIndex * itemWidthRef.current}px)`;
    }
  };

  const getVisibleItemsCount = () => {
    if (containerRef.current && itemWidthRef.current > 0) {
      return Math.floor(containerRef.current.offsetWidth / itemWidthRef.current) || 1;
    }
    return 1;
  };

  return (
    <div className="flex flex-col w-[87vw] mx-auto">
      <h2 className="text-5xl font-bold pt-[10vh] playfair-display-sc-regular text-[var(--color-fontBold)]">{title?`${title}`:"Books"}</h2>
      <hr className="w-full mt-0"/>
      <div className="relative">
        <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-1000 ease-in-out"
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div className="pt-2">
              {item}
            </div>
          </div>
        ))}
      </div>
      </div>
      {currentIndex > 0 && (
        <button
          onClick={prev}
          className="absolute left-[-5vh] top-1/2 -translate-y-1/2 p-1">
          <svg width="23" height="80" viewBox="0 0 23 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.05239 40.4702L2.80184 40L3.05239 39.5298L21.652 4.62184L21.652 4.62179C21.8714 4.21014 22.0047 3.61247 21.9999 2.9664C21.995 2.31936 21.8525 1.73326 21.6313 1.34035L21.6313 1.34034C21.523 1.14786 21.427 1.05651 21.3746 1.01926C21.3684 1.01479 21.3629 1.0112 21.3582 1.00833C21.3109 1.03455 21.2001 1.11945 21.0623 1.37809L21.0623 1.37815L1.34797 38.3782L1.34792 38.3783C1.13313 38.7813 1 39.3651 1 40C1 40.6349 1.13313 41.2187 1.34792 41.6217L1.34797 41.6218L21.0623 78.6218L21.0624 78.6219C21.2001 78.8805 21.3108 78.9654 21.3582 78.9917C21.3628 78.9888 21.3683 78.9852 21.3746 78.9807C21.4269 78.9435 21.5229 78.8521 21.6313 78.6596L21.6314 78.6594C21.8525 78.2667 21.995 77.6807 21.9999 77.0337C22.0047 76.3877 21.8714 75.79 21.652 75.3783L22.4574 74.9491L21.652 75.3783L3.05239 40.4702ZM21.337 0.997561C21.337 0.997603 21.3377 0.997847 21.3389 0.998166L21.337 0.997561ZM21.381 0.997953C21.3825 0.997656 21.3831 0.997439 21.3831 0.997404L21.381 0.997953ZM21.3831 79.0026C21.3831 79.0026 21.3825 79.0024 21.3811 79.0021L21.3831 79.0026ZM21.3388 79.0019C21.3376 79.0022 21.337 79.0024 21.337 79.0024L21.3388 79.0019Z" fill="var(--color-Prev-Next)" stroke="var(--color-Prev-Next)" strokeWidth="0.1"/>
          </svg>
        </button>
      )}
      {currentIndex < items.length - getVisibleItemsCount() && (
        <button
          onClick={next}
          className="absolute right-[-5vh] top-1/2 -translate-y-1/2 p-0">
            <svg width="23" height="80" viewBox="0 0 23 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9476 40.4702L20.1982 40L19.9476 39.5298L1.34801 4.62184L1.34798 4.62179C1.12861 4.21014 0.995287 3.61247 1.00013 2.9664C1.00497 2.31936 1.1475 1.73326 1.36866 1.34035L1.36867 1.34034C1.47701 1.14786 1.57302 1.05651 1.62537 1.01926C1.63164 1.01479 1.6371 1.0112 1.64177 1.00833C1.68914 1.03455 1.79987 1.11945 1.93766 1.37809L1.9377 1.37815L21.652 38.3782L21.6521 38.3783C21.8669 38.7813 22 39.3651 22 40C22 40.6349 21.8669 41.2187 21.6521 41.6217L21.652 41.6218L1.9377 78.6218L1.93765 78.6219C1.7999 78.8805 1.68919 78.9654 1.64181 78.9917C1.63715 78.9888 1.63169 78.9852 1.62544 78.9807C1.57308 78.9435 1.47705 78.8521 1.3687 78.6596L1.36863 78.6594C1.1475 78.2667 1.00497 77.6807 1.00013 77.0337C0.995287 76.3877 1.1286 75.79 1.34799 75.3783L0.542637 74.9491L1.34801 75.3783L19.9476 40.4702ZM1.66298 0.997561C1.66298 0.997603 1.66234 0.997847 1.66109 0.998166L1.66298 0.997561ZM1.61898 0.997953C1.61755 0.997656 1.61685 0.997439 1.61686 0.997404L1.61898 0.997953ZM1.61687 79.0026C1.61686 79.0026 1.61753 79.0024 1.61891 79.0021L1.61687 79.0026ZM1.6612 79.0019C1.66242 79.0022 1.66304 79.0024 1.66305 79.0024L1.6612 79.0019Z" fill="var(--color-Prev-Next)" stroke="var(--color-Prev-Next)" strokeWidth="0.1"/>
            </svg>
        </button>
      )}
    </div>
    </div>
  );
}

export default BooksSlider;