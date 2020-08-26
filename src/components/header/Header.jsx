import React from 'react';
import Autocomplete from '../header/Autocomplete/Autocomplete';
import Toggle from '../toggle/Toggle';
import { useAccessibility } from '../../hooks/appContext';
import { useStyles } from '../../hooks/globalStyles';


const Header = () => {
  
  const { theme } = useAccessibility();
  const classes = useStyles(theme);
  return (
    <>
      <h1>FloraFile</h1>
      <div className={classes.globalText} >
        <Autocomplete />
        <Toggle /> 
      </div>
    </>

    
  );
};

export default Header;

