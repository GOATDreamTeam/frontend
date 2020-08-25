import React, { useEffect } from 'react';
import { useAccessibility } from '../../hooks/appContext';

const Toggle = () => {
  
  const {
    theme, 
    handleChange
  } = useAccessibility();

  useEffect(() => {
    console.log('we are changing the theme');
    console.log(theme);
  }, [theme]);

  return (
    <section>
      <input id="toggle" type="checkbox" name="toggle" onChange={handleChange} checked={theme === 'standard'}/>
         
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
