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
    color: theme => `${cssVariables(theme).primaryColor}`

    // 'width': '50%',
    // 'height': '50%',
  }, 

  detailPageUl: { 
    'list-style-type': 'none',
    color: theme => `${cssVariables(theme).primaryColor}`
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
    border: theme => `solid 2px ${cssVariables(theme).primaryColor}`, // needs cleaning 
    'border-radius': '2em'
  }

});
