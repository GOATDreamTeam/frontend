import { createUseStyles } from 'react-jss';

export const useListStyles = createUseStyles({
    
  column: {
    flex: '25%',
    'max-width': '100%',
    padding: '0 4px', 
  }, 

  row: {
    display: 'flex',
    'flex-wrap': 'wrap',
    padding: '0 4px', 
  },

  img: {
    width: '100px',
    height: '100px',
    'object-fit': 'cover',
  }
});
  
