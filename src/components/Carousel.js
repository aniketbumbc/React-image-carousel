import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import imagesData from '../imagesData';

const Carousel = () => {
  // let filterdImagesData = [...imagesData];
  const [currentEleIndex, setcurrentEleIndex] = useState(0);
  const [image, setImage] = useState([]);
  useEffect(() => {
    for (let i = 0; i < [...imagesData].length; i++) {
      [...imagesData][i].images = getRandomImage(imagesData[i].images, 4);
    }
    setImage([...imagesData]);
    // eslint-disable-next-line
  }, []);

  /**
   * Method sets next current element state
   */

  const nextSlide = () => {
    if (currentEleIndex === 3) return;
    setcurrentEleIndex(
      currentEleIndex === imagesData.length - 1 ? 0 : currentEleIndex + 1
    );
  };

  /**
   * Method sets previous current element state
   */

  const prevSlide = () => {
    if (currentEleIndex === 0) return;
    setcurrentEleIndex(
      currentEleIndex === 0 ? imagesData.length - 1 : currentEleIndex - 1
    );
  };

  /* 
    Method return 4 random images from imageData.
  */

  const getRandomImage = (images, number) => {
    if (images.length <= 0) return [];
    const randomImages = [];
    for (let i = 0; i < number; i++) {
      const randomNumber = Math.floor(Math.random() * images.length);
      if (i === images.length) {
        break;
      }
      randomImages.push(images[randomNumber]);
    }
    return randomImages;
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
            currentEleIndex === 0
              ? 'fas fa-arrow-left fa-2x prevIcon  disabled'
              : 'fas fa-arrow-left fa-2x  prevIcon'
          }
          onClick={prevSlide}
        ></i>
        {image.map((block, index) => {
          return (
            <div className='row' key={index}>
              {index === currentEleIndex && <h4>{block.title}</h4>}

              {index === currentEleIndex &&
                block.images.map((imgUrl, index) => (
                  <div className='column' key={index + 'clmn'}>
                    <img src={imgUrl} alt='Snow' />
                  </div>
                ))}
            </div>
          );
        })}
        <i
          className={
            currentEleIndex === image.length - 1
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
