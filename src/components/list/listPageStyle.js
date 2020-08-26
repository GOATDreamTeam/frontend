import { createUseStyles } from 'react-jss';

export const useListStyles = createUseStyles({
    
  column: {
    flex: '25%',
    'max-width': '100%',
    // padding: '0 4px',
  }, 

  row: {
    display: 'flex',
    'flex-wrap': 'wrap',
    // padding: '0 4px',
    'list-style': 'none' 
  },

  img: {
    width: '250px',
    height: '250px',
    'object-fit': 'cover',
  }
});
  
