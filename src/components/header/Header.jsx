import React from 'react';
import Autocomplete from '../header/Autocomplete/Autocomplete';
import Toggle from '../toggle/Toggle';
import { useAccessibility } from '../../hooks/appContext';
import { useHeaderStyle } from '../../hooks/headerStyleHooks';

const Header = () => {
  
  const { theme } = useAccessibility();
  const classes = useHeaderStyle(theme);


  return (
    <section className={classes.headerSection}>

      <h1 className={classes.name}>FloraFile</h1>

      <div>

        <Autocomplete className={classes.search}/>
        <Toggle /> 
      </div>
    </section>
  );
};

export default Header;
