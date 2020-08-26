// import React from 'react';
import { createUseStyles } from 'react-jss';


// only what we want every page to have 

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
  }
});