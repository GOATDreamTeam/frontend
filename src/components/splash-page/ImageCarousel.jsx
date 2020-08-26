import React from 'react';
import Image1 from '../../../images/flowers/image1.jpg';
import Image2 from '../../../images/flowers/image2.jpg';
import Image3 from '../../../images/flowers/image3.jpg';
import Image4 from '../../../images/flowers/image4.jpg';
import Image5 from '../../../images/flowers/image5.jpg';
import styles from './ImageCarousel.css';

function ImageCarousel() {
  return (
    <div className={styles.Carousel}>
      <img className={styles.f1} src={Image1} alt=""/> 
      <img className={styles.f2} src={Image2} alt=""/> 
      <img className={styles.f3} src={Image3} alt=""/> 
      <img className={styles.f4} src={Image4} alt=""/> 
      <img className={styles.f5} src={Image5} alt=""/> 
    </div>
    
  );
}

export default ImageCarousel;
