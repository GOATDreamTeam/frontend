// only what we want every page to have 
import { createUseStyles } from 'react-jss'; 
import placeholderimg from '../../images/placeholder/placeholder.jpg';

export const placeholder = placeholderimg;

export const headerColor = {
  //teal color for header 
  color: '#214044'
};


export const cssVariables = theme => ({
  //right now this is controlling the frame color around the images
  primaryColor: theme === 'standard' ? '#6c6a6a' : 'black',
  hoverColor: theme === 'standard' ? 'white' : 'white',
});

export const useStyles = createUseStyles({

  globalText: {
    fontFamily: 'monospace',
    color: theme => theme === 'standard' ? 'white' : 'black'
  },


  links: {
    fontFamily: 'times new roman',
    color: theme => theme === 'standard' ? 'green' : 'black ', 
  },

  basicDisplay: {
    'background': theme => theme === 'standard' ? 'linear-gradient(#f7fcf3, #aba499)' : 'white',
  }
});
