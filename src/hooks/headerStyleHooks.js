import { createUseStyles } from 'react-jss';
// import { headerColor } from '../hooks/globalStyles.js';

export const useHeaderStyle = createUseStyles({

  headerSection: {
    backgroundColor: '#214044',
    margin: '0px',
    padding: '20px',
    display: 'flex',
    boxShadow: '0px 2px 4px black',
    marginBottom: '25px'
  },

  name: {
    float: 'left',
    fontFamily: 'Berkshire Swash',
    fontSize: '40px',
    color: '#ed9e91',
    letterSpacing: '4px',
    paddingRight: '20px',
    textShadow: '2px 1px 2px black'
  },

  searchBar: {
    display: 'flex',
    alignItems: 'center'
  },

});
