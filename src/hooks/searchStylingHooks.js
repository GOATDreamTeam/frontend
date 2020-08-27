import { createUseStyles } from 'react-jss';

export const useSearchStyling = createUseStyles({
    
  search: {
    width: '40%',
    position: 'relative',
  },

  searchInput: {
    border: '0.1rem solid grey',
    borderRadius: '0.1rem',
    fontSize: '2.0rem',

    '&focus' : {
      outline: 'none',
      fontSize: '2.0rem',
      borderRadius: '0.2rem',
      padding: '1rem',
      border: '0.1rem solid #8abaae',
      transition: '0.04s',
    }
  },

  searchSubmit: {
    height: '100%',
    width: '3em',
    marginTop: '-1.5em',
    position: 'absolute',
    top: '50%',
    opacity: 0.2,
    backgroundColor: 'transparent',
    border: 0,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundImage: 'url("https://icon-library.com/images/plant-icon/plant-icon-2.jpg")',

    '&hover' : {
      outline: 'none',
      opacity: 0.4,
      cursor: 'pointer',
    },

    '&focus' : {
      outline: 'none',
      opacity: 0.9,
    }
  }
});
