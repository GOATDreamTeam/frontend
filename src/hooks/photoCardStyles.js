import { createUseStyles } from 'react-jss';
import { cssVariables } from './globalStyles';

export const usePhotoCardStyles = createUseStyles({
  
  img: {
    width: '250px',
    height: '250px',
    'object-fit': 'cover',
    border: theme => `solid 2px ${cssVariables(theme).primaryColor}`,
    'border-radius': '2em',
    margin: '10px'
  }
  
});
