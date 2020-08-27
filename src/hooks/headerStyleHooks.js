import { createUseStyles } from 'react-jss';

export const useHeaderStyle = createUseStyles({

  headerSection: {
    backgroundColor: '#ea7b7b',
    margin: '0px',
    padding: '20px',
    display: 'flex'
  },

  name: {
    float: 'left',
    fontFamily: 'Berkshire Swash',
    fontSize: '30px'
  },

  searchBar: {
    display: 'flex',
    alignItems: 'center'
  },

});