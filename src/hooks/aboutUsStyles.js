/* eslint-disable no-undef */
import { createUseStyles } from 'react-jss'; 

export const useAboutUsStyles = createUseStyles({

  aboutUsDiv: {
    'box-sizing': 'border-box',
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-items': 'center',
    position: 'relative',
  },

  pageTitleQuote: {
    display: 'flex', 
    'justify-content': 'center', 
    'text-align': 'center',
    'flex-direction': 'column',
    margin: '1.5em'
  },

  pageTitle: {
    'text-align': 'center'
  },

  individualPersonDiv: {
    display: 'flex',
    width: '300px',
    'justify-content': 'center',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    height: 'auto',
    margin: '20px',
    background: 'rgba(255, 255, 255, 0.2)',
    'text-align': 'left',
    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    'text-overflow': 'ellipsis', 
    'border-radius': '2%'
  },

  fullName: {
    'margin-top': '1.2em'
  },

  descriptionTitle: {
    // this will style our job title
  },

  socialMediaList: {
    'list-style-type': 'none', 
    display: 'flex', 
    'justify-content': 'row', 
  },

  socialMediaLi: {
    display: 'flex',
    'justify-content': 'flex-start',
  }, 


  jobTitle: {
    'font-size': '18px'
  },

  aboutUsSocialLinks: {
    display: 'flex',
    'text-decoration': 'none',
    'justify-content': 'flex-start',
  },

  aboutUsProfileImg: {
    width: '288px',
    height: 'auto',
    'border-radius': '2%',
    filter: theme => theme === 'standard' ? 'grayscale(0%)' : 'grayscale(100%)',
  },

  socialIconImg: {
    filter: theme => theme === 'standard' ? 'grayscale(0%)' : 'grayscale(100%)',
    'border-radius': '50% ',
    width: '3em', 
    margin: '.5em'
  }

});
