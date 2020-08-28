import React from 'react';
import ImageCarousel from './ImageCarousel';
import Footer from '../footer/Footer';
import { useSplashStyles } from '../../hooks/splashStyles';

export default function SplashPage() {

  const classes  = useSplashStyles();

  return (
 
    <div >
       
      <div>
      Welcome to FloraFile! Whether you are a plant newby or plant scientist...(open-access library, curiosity, accessibility)
      </div>
 

      <div className={classes.imageCarousel}>
        <ImageCarousel />
      </div>
      <Footer />
    </div>

  );
}
