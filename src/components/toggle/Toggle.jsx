import React from 'react';
import { useAccessibility } from '../../hooks/appContext';
import { useToggleStyles } from '../../hooks/useToggleStyleHooks';

const Toggle = () => {

  const { theme }  = useAccessibility();
  const classes = useToggleStyles(theme);
  
  const {
    handleChange
  } = useAccessibility();

  return (
    <section className={classes.paragraphText}>
      <div >
        <input 
          id="toggle" 
          type="checkbox" 
          name="toggle" 
          onChange={handleChange} 
          checked={theme === 'mono'}/>
      
          Check for Monochrome
      
        {/* <span className={classes.slider}></span> */}
      </div>
    </section>
  );
};

export default Toggle;
