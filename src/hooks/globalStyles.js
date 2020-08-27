// only what we want every page to have 
import { createUseStyles } from 'react-jss'; 

export const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png';

export const cssVariables = theme => ({
  primaryColor: theme === 'standard' ? 'yellow' : 'black'
});

export const useStyles = createUseStyles({

  globalText: {
    fontFamily: 'monospace',
    color: theme => theme === 'standard' ? 'red' : 'black'
  },

  links: {
    fontFamily: 'times new roman',
    color: theme => theme === 'standard' ? 'green' : 'black ', 

    '&hover' : {
      color: 'blue',
      background: 'pink'
    },
  },

  basicDisplay: {
    'background': theme => theme === 'standard' ? 'linear-gradient(#00c400, #FFFF)' : 'white',
  }
});
