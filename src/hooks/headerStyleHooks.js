import { createUseStyles } from 'react-jss';
// import { headerColor } from '../hooks/globalStyles.js';

export const useHeaderStyle = createUseStyles({

  headerSection: {
    backgroundColor: '#214044',
    margin: '0px',
    padding: '20px',
    display: 'flex'
  },

  name: {
    float: 'left',
    fontFamily: 'Berkshire Swash',
    fontSize: '40px',
    color: '#ed9e91',
    letterSpacing: '4px',
    paddingRight: '20px'
  },

  searchBar: {
    display: 'flex',
    alignItems: 'center'
  },

});
