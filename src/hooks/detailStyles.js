import { createUseStyles } from 'react-jss';
import { cssVariables } from './globalStyles';

export const useDetailStyles = createUseStyles({
  mainImageDisplay: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    paddingTop: '10px',
    'flex-direction': 'column',
    'text-align': 'center',
    color: theme => `${cssVariables(theme).primaryColor}`
  }, 

  title: {
    paddingBottom: '20px',
    color: theme => `${cssVariables(theme).secondaryColor}`
  },

  detailPageUl: { 
    'list-style-type': 'none',
    padding: '20px',
    color: theme => `${cssVariables(theme).secondaryColor}`
  },

  galleryImagesDisplay: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-items': 'center',
    'borderTop': '2px solid #6c6a6a',
    paddingTop: '20px'
  },

  img: {
    width: '250px',
    height: '250px',
    'object-fit': 'cover',
    border: theme => `solid 2px ${cssVariables(theme).primaryColor}`,
    'border-radius': '2em'
  },

  map: {
    margin: 'auto',
    alignItems: 'center',
    width: '80%',
    filter: theme => theme === 'standard' ? 'grayscale(0%)' : 'grayscale(100%)'
  }
});
