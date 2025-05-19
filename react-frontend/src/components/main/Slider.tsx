import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import IMGS from '../../constants/images';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect} 
      className="w-[140vh] mx-auto flex items-center justify-center"
      indicators={false}
    >
      <Carousel.Item>
        <img src={IMGS.slider_img_1} className="w-full h-full object-cover" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={IMGS.slider_img_2} className="w-full h-full object-cover" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={IMGS.slider_img_3} className="w-full h-full object-cover" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;