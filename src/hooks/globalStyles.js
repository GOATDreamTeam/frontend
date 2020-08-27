// import React from 'react';
import { createUseStyles } from 'react-jss'; 

// only what we want every page to have 

export const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png';

export const cssVariables = theme => ({
  primaryColor: theme === 'standard' ? 'yellow' : 'black',
  // sandbox 
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
