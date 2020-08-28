import { createUseStyles, withTheme } from 'react-jss';
import { cssVariables } from './globalStyles';

export const useSearchStyles = createUseStyles({
  preview : {
    display: 'flex',
    flexDirection: 'row',
    padding: '1px',
    listStyleType: 'none',
    // preview on hover 
    '&:hover': {
      background: theme => `${cssVariables(theme).hoverColor}`,
      opacity: '.70'
    }
  },

  text: {
    display: 'flex',
    flex: 'auto',
    flexDirection: 'column'
  },

  photo: {
    display: 'flex',
    flex: '0 1 auto',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    marginRight: '5px',
    background: 'center contain no-repeat'
  },

  common: {
    display: 'flex', 
    fontSize: '16px',
    color: theme => theme === 'standard' ? '#8FBC8F' : 'black',
    alignItems: 'center',
    wordBreak: 'break-all',
  },

  scientific: {
    lineHeight: '12px',
    color: '#80868b',
    marginTop: '2px'
  }

});
