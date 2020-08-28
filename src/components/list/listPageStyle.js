import { createUseStyles } from 'react-jss';
import { cssVariables } from '../../hooks/globalStyles';

export const useListStyles = createUseStyles({
    
  column: {
    display: 'flex',
    flex: '25%',
    'max-width': '20%',
    'justify-content': 'center',
    'align-items': 'center',
    color: 'green',
    'text-align': 'center'
  }, 

  row: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-items': 'center',
    'list-style': 'none',
    'padding': '20px'
  },

  img: {
    width: '250px',
    height: '250px',
    'object-fit': 'cover',
    border: theme => `solid 2px ${cssVariables(theme).primaryColor}`,
    'border-radius': '2em'
  },

  links: {
    'text-decoration': 'none',
    color: theme => theme === 'standard' ? '#214044' : 'black',
    'text-align': 'center'
  },

  '@media (max-width: 1300px)': {
    column: {
      flex: '25%',
      'max-width': '25%'
    },

    img:{
      width: '250px',
      height: '250px'
    }
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
  },

  // paging: {
  //   display: 'flex',
  //   float: 'right'
  // }
});
