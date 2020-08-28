// only what we want every page to have 
import { createUseStyles } from 'react-jss'; 

export const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png';

export const cssVariables = theme => ({
  primaryColor: theme === 'standard' ? 'purple' : 'black'
});

export const useStyles = createUseStyles({

  basicDisplay: {
    'background': theme => theme === 'standard' ? 'linear-gradient(#00c400, #FFFF)' : 'white',
  }
});
