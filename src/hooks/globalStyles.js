// only what we want every page to have 
import { createUseStyles } from 'react-jss'; 

export const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png';

export const headerColor = {
  //teal color for header 
  color: '#214044'
};


export const cssVariables = theme => ({
  //right now this is controlling the frame color around the images
  primaryColor: theme === 'standard' ? '#6c6a6a' : 'black'
});

export const useStyles = createUseStyles({

  globalText: {
    fontFamily: 'monospace',
    color: theme => theme === 'standard' ? 'white' : 'black'
  },

  links: {
    fontFamily: 'times new roman',
    color: theme => theme === 'standard' ? 'green' : 'black ', 

    // '&hover' : {
    //   color: 'blue',
    //   background: 'pink'
    // },
  },

  basicDisplay: {
    'background': theme => theme === 'standard' ? 'linear-gradient(#f7fcf3, #aba499)' : 'white',
  }
});
