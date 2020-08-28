import { createUseStyles } from 'react-jss';
import { cssVariables } from './globalStyles';

export const useDetailStyles = createUseStyles({

  mainImageDisplay: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    // 'border': '2px solid blue',
    paddingTop: '10px',
    'flex-direction': 'column',
    'text-align': 'center',
    // 'width': '50%',
    // 'height': '50%',
  }, 

  title: {
    paddingBottom: '20px'
  },

  detailPageUl: { 
    'list-style-type': 'none',
    padding: '20px'
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
  }

});
