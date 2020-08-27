import React from 'react';
import Autocomplete from '../header/Autocomplete/Autocomplete';
import Toggle from '../toggle/Toggle';
import { useAccessibility } from '../../hooks/appContext';
import { useStyles } from '../../hooks/globalStyles';
import { useHeaderStyle } from '../../hooks/headerStyleHooks';

const Header = () => {
  
  const { theme } = useAccessibility();
  const classes = useStyles(theme);
  const headerStyles = useHeaderStyle();

  return (
    <section className={headerStyles.headerSection}>
      <h1 className={headerStyles.name}>FloraFile</h1>
      <div className={classes.globalText} >
        <Autocomplete className={headerStyles.search}/>
        <Toggle className={headerStyles.toggle}/> 
      </div>
    </section>
  );
};

export default Header;
