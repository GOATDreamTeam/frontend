import { createUseStyles } from 'react-jss'; 
import { cssVariables } from './globalStyles';

export const useToggleStyles = createUseStyles({

  slider: {
    position: 'absolute',
    cursor: 'pointer',
  },

  // text: {   
  //   color: theme => theme === 'standard' ? 'white' : 'black'
  // },

  paragraphText: {
    color: theme => `${cssVariables(theme).toggleText}`
  }


});
