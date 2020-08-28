// only what we want every page to have 
import { createUseStyles } from 'react-jss'; 
import placeholderimg from '../../images/placeholder/placeholder.jpg';

export const placeholder = placeholderimg;

export const cssVariables = theme => ({
  //this is controlling the frame color around the images
  primaryColor: theme === 'standard' ? '#6c6a6a' : 'black',
  hoverColor: theme === 'standard' ? 'white' : 'white',
  // the below is not working in the way we expect, just stays gray
  toggleText: theme === 'standard' ? 'white' : 'black',
  secondaryColor: theme === 'standard' ? '#214044' : 'black',
});

export const useStyles = createUseStyles({
  basicDisplay: {
    'background': theme => theme === 'standard' ? 'linear-gradient(#f7fcf3, #aba499)' : 'white',
  }
});
