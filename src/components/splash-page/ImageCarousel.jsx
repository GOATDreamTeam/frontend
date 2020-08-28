import React from 'react';
import Image1 from '../../../images/flowers/image1.jpg';
import Image2 from '../../../images/flowers/image2.jpg';
import Image3 from '../../../images/flowers/image3.jpg';
import Image4 from '../../../images/flowers/image4.jpg';
import Image5 from '../../../images/flowers/image5.jpg';
// import styles from './ImageCarousel.css';

import { useAccessibility } from '../../hooks/appContext';
import { useImageCarouselStyles } from '../../hooks/imageCarouselStyles';


function ImageCarousel() {

  const { theme } = useAccessibility();
  const classes = useImageCarouselStyles(theme);

  return (
    <>
      <div className={classes.carouselDiv}>
        <img className={`${classes.carouselImage} ${classes.f1}`} src={Image1} alt=""/> 
        <img className={`${classes.carouselImage} ${classes.f2}`} src={Image2}alt=""/> 
        <img className={`${classes.carouselImage} ${classes.f3}`} src={Image3} alt=""/> 
        <img className={`${classes.carouselImage} ${classes.f4}`} src={Image4} alt=""/> 
        <img className={`${classes.carouselImage} ${classes.f5}`} src={Image5} alt=""/> 
      </div>
      
 
    </>
    // image, changing images with fade npm package 
  );
}

export default ImageCarousel;
