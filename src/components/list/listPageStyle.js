import { createUseStyles } from 'react-jss';
import { cssVariables } from '../../hooks/globalStyles';

export const useListStyles = createUseStyles({
    
  column: {
    flex: '25%',
    'max-width': '20%',
    'justify-content': 'center',
    'align-items': 'center',
  }, 

  row: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-items': 'center',
    'list-style': 'none' 
  },

  img: {
    width: '250px',
    height: '250px',
    'object-fit': 'cover',
    border: theme => `solid 2px ${cssVariables(theme).primaryColor}`,
    'border-radius': '2em'
  },

  '@media (max-width: 1000px)': {
    column: {
      flex: '25%',
      'max-width': '50%'
    },

    img:{
      width: '250px',
      height: '250px'
    }
  },
  
  '@media (max-width: 640px)': {
    column: {
      flex: '25%',
      'max-width': '100%'
    }
  }
});
