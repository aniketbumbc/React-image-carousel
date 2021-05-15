import React, { useState } from 'react';
import '../styles/Carousel.css';
import imagesData from '../imagesData';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const imagesLength = imagesData.length;
  const nextSlide = () => {
    if (current === 3) return;
    setCurrent(current === imagesLength - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (current === 0) return;
    setCurrent(current === 0 ? imagesLength - 1 : current - 1);
  };
  if (imagesLength.length <= 0) {
    return null;
  }
  return (
    <div className='container'>
      <h2> Image Carousal </h2>
      <div className='boxModel'>
        <div className='row1'>
          <i
            className='fas fa-arrow-left fa-2x prevIcon'
            onClick={prevSlide}
          ></i>
          <div className='column'>
            <img
              src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt='Snow'
            />
          </div>
          <div className='column'>
            <img
              src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt='Snow'
            />
          </div>
          <div className='column'>
            <img
              src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt='Snow'
            />
          </div>
          <div className='column'>
            <img
              src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt='Snow'
            />
          </div>
          <i className='fas fa-arrow-right fa-2x prevIcon'></i>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Carousel;
