import { createUseStyles } from 'react-jss';
import { cssVariables } from './globalStyles';

export const useDetailStyles = createUseStyles({

  //   mainImageDisplay: {
  //     flex: '25%',
  //     'max-width': '20%',
  //     'justify-content': 'center',
  //     'align-items': 'center',
  //   }, 

  galleryImagesDisplay: {
    display: 'flex',
    'flex-wrap': 'wrap',
    // 'justify-content': 'right',
    // 'align-items': 'center',
    // 'list-style': 'none', 
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
