/* eslint-disable no-undef */
// import React from 'react';
import { createUseStyles } from 'react-jss'; 

// only what we want every page to have 

export const useImageCarouselStyles = createUseStyles({

  carouselDiv: {
    display: 'flex',
    'align-content': 'center',
    'justify-content': 'center',
    width: '300px',
    height: '300px'
  },

  carouselImage: {
    width: '300px',
    height: '300px',
    'object-fit': 'cover',
    position: 'absolute',
    '-webkit-animation-name': '$fade',
    '-webkit-animation-iteration-count': 'infinite',
    '-webkit-animation-duration': '11s',
    'animation-name': '$fade',
    'animation-iteration-count': 'infinite',
    'animation-duration': '11s',
    // default is eas in, but makes the fade steps linear through below
    // 'animation-timing-function': 'linear',
    filter: theme => theme === 'standard' ? 'grayscale(0%)' : 'grayscale(100%)'
  },

  f2: {
    'animation-delay': '-2s'
  },

  f3: {
    'animation-delay': '-4s'
  },

  f4: {
    'animation-delay': '-6s'
  }, 

  f5: {
    'animation-delay': '-8s'
  },

  //   changes when 0, 20, 33, 53, and 100% of the animation is completed
  '@keyframes fade': {
    '0%': { opacity: 0 },
    '20%': { opacity: 1 },
    '33%': { opacity: 1 },
    '53%': { opacity: 0 },
    '100%': { opacity: 0 },
  
  }

  

});
