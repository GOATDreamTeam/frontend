import { createUseStyles } from 'react-jss';

export const useToggleStyles = createUseStyles({

  slider: {
    position: 'absolute',
    cursor: 'pointer',
  },

  text: {   
    color: theme => theme === 'standard' ? 'white' : 'black'
  }


});
