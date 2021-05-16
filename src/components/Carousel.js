import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import imagesData from '../imagesData';

const Carousel = () => {
  let finalImagesData = [...imagesData];
  //current = array Index
  const [current, setCurrent] = useState(0);
  //filterData 4 array
  const [image, setImage] = useState([]);
  useEffect(() => {
    for (let i = 0; i < finalImagesData.length; i++) {
      finalImagesData[i].images = chooseRandomImage(imagesData[i].images, 4);
    }
    setImage(finalImagesData);
  }, []);
  const imagesLength = imagesData.length;
  const nextSlide = () => {
    if (current === 3) return;
    setCurrent(current === imagesLength - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (current === 0) return;
    setCurrent(current === 0 ? imagesLength - 1 : current - 1);
  };

  const chooseRandomImage = (array, number) => {
    if (array.length <= 0) return [];
    const res = [];
    for (let i = 0; i < number; i++) {
      const randomNumber = Math.floor(Math.random() * array.length);
      if (i === array.length) {
        break;
      }
      res.push(array[randomNumber]);
    }
    return res;
  };
  if (image.length <= 0) {
    return <h4> Data Not Found</h4>;
  }
  return (
    <div className='container'>
      <h2> Image Carousal </h2>
      <div className='boxModel'>
        <i
          className={
            current === 0
              ? 'fas fa-arrow-left fa-2x prevIcon  disabled'
              : 'fas fa-arrow-left fa-2x prevIcon'
          }
          onClick={prevSlide}
        ></i>
        {image.map((slide, index) => {
          return (
            <div className='row1' key={index}>
              {index === current && <h4>{slide.title}</h4>}

              {index === current &&
                slide.images.map((imgUrl, index) => (
                  <div className='column' key={index + 'clmn'}>
                    <img src={imgUrl} alt='Snow' />
                  </div>
                ))}
            </div>
          );
        })}
        <i
          className={
            current === image.length - 1
              ? 'fas fa-arrow-right fa-2x nextIcon disabled'
              : 'fas fa-arrow-right fa-2x nextIcon'
          }
          onClick={nextSlide}
        ></i>
      </div>
    </div>
  );
};

export default Carousel;
