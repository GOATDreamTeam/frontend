import React from 'react';
import { useAccessibility } from '../../hooks/appContext';
import { useToggleStyles } from '../../hooks/useToggleStyleHooks';

const Toggle = () => {

  const theme  = useAccessibility();
  const classes = useToggleStyles(theme);
  
  const {
    handleChange
  } = useAccessibility();

  return (
    <section>
      <label className={classes.text} >
        <input 
          
          id="toggle" 
          type="checkbox" 
          name="toggle" 
          onChange={handleChange} 
          checked={theme === 'mono'}/>
          
      Check for Monochrome
        

        {/* <span className={classes.slider}></span> */}
      </label>
    </section>
  );
};

export default Toggle;

// Notes from Ryan 
//  use some global state for theme so we don't have to pass it everywhere 
// themeProvider, with dark and light accessiblity on/off 
// Theme Context 
// Theme Provider - use this within index so that entire app has access to the them 
//      value = ({ theme, toggletheme }) and 2 hooks: useTheme and useToggleTheme or insted of theme Accessibility 
// Don't need to use a reducer 
// useState() instead
// expose a toggle theme function that switches the theme 
// put images in cloudinary by changing images in url bar - upload an image to cloudinary bucket, it has the normal image
