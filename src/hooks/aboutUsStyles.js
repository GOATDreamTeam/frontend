/* eslint-disable no-undef */
// import React from 'react';
import { createUseStyles } from 'react-jss'; 

// only what we want every page to have 

export const useAboutUsStyles = createUseStyles({

  aboutUsDiv: {
    'box-sizing': 'border-box',
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-items': 'center',
    border: 'solid red 3px',
    position: 'relative',
  },

  individualPersonDiv: {
    display: 'flex',
    // width: '30%',
    'justify-content': 'center',
    'flex-direction': 'column',
    'align-items': 'center',
    border: 'solid blue 3px', 
    padding: '20px',
    'max-width': '300px',
    margin: 'auto',
    'text-align': 'center',
    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    'text-overflow': 'ellipsis'
  },

  socialMediaList: {
    margin: '24px 0', 
    'list-style-type': 'none'
  },

  jobTitle: {
    'font-size': '18px'
  },

  aboutUsSocialLinks: {
    'text-decoration': 'none',
  },

  aboutUsProfileImg: {
    width: '100%',
    filter: theme => theme === 'standard' ? 'grayscale(0%)' : 'grayscale(100%)',
  },

  socialIconImg: {
    filter: theme => theme === 'standard' ? 'grayscale(0%)' : 'grayscale(100%)',
    'border-radius': '50%',
    width: '15%'
  },

  '@media (max-width: 1000px)': {
    aboutUsDiv: {
      flex: '25%',
      'max-width': '50%'
    },

    img:{
      width: '250px',
      height: '250px'
    }
  },
  
  '@media (max-width: 640px)': {
    aboutUsDiv: {
      flex: '25%',
      'max-width': '100%'
    }
  },

});
