import { createUseStyles } from 'react-jss';

export const useHeaderStyle = createUseStyles({

  headerSection: {
    backgroundColor: theme => theme === 'standard' ? '#214044' : 'white',
    margin: '0px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 2px 4px black',
    marginBottom: '25px'
  },

  name: {
    fontFamily: 'Berkshire Swash',
    fontSize: '40px',
    color: theme => theme === 'standard' ? '#ed9e91' : 'black',
    letterSpacing: '4px',
    paddingRight: '20px',
    textShadow: theme => theme === 'standard' ? '2px 1px 2px black' : '2px 1px 2px white'
  }
});
