import { createUseStyles } from 'react-jss';
import { cssVariables } from './globalStyles';

export const useDetailStyles = createUseStyles({

  mainImageDisplay: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'border': '2px solid blue',
    'flex-direction': 'column',
    'text-align': 'center',
    // 'width': '50%',
    // 'height': '50%',
  }, 

  detailPageUl: { 
    'list-style-type': 'none'
  },

  galleryImagesDisplay: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-items': 'center',
    'border': '2px solid purple'
  },

  img: {
    width: '250px',
    height: '250px',
    'object-fit': 'cover',
    border: theme => `solid 2px ${cssVariables(theme).primaryColor}`,
    'border-radius': '2em'
  }

});
