import { createUseStyles } from 'react-jss';
// import { headerColor } from '../hooks/globalStyles.js';

export const useHeaderStyle = createUseStyles({

  headerSection: {
    backgroundColor: theme => theme === 'standard' ? '#214044' : 'white',
    margin: '0px',
    padding: '20px',
    display: 'flex'
  },

  name: {
    float: 'left',
    fontFamily: 'Berkshire Swash',
    fontSize: '40px',
    color: theme => theme === 'standard' ? '#ed9e91' : 'black',
    letterSpacing: '4px',
    paddingRight: '20px'
  },

  searchBar: {
    display: 'flex',
    alignItems: 'center'
  },

});
