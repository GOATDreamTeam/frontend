import React from 'react';
import ImageCarousel from './ImageCarousel';
import Footer from '../footer/Footer';
import { useSplashStyles } from '../../hooks/splashStyles';

export default function SplashPage() {

  const classes  = useSplashStyles();

  return (
 
    <div >
       
      <div className={classes.appIntro}>
      Welcome to FloraFile, an open access encyclopedia for curious newbies and botanists alike. We are a group of developers centering accessibility by providing a Color Blind Mode throughout our entire application. We believe that accessible and inclusive web design should be for everyone.
      </div>
 

      <div className={classes.imageCarousel}>
        <ImageCarousel />
      </div>
      <Footer />
    </div>

  );
}
