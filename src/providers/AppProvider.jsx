import React, { useState } from 'react'; 
import { AccessibilityContext } from '../hooks/appContext';
// import { useEffect } from 'react';

  
// eslint-disable-next-line react/prop-types
const AccessibilityProvider = ({ children }) => {

  // standard is our initial state of our color theme
  // mono will be our grayscale for accessibility 
  const [theme, setTheme] = useState('standard');


  const handleChange = ({ target }) => { 
    if(target.name === 'toggle'){
      if(theme === 'standard') { 
        setTheme('mono'); 
      } else {
        setTheme('standard');
      }
    }
  };

  const providedValue = {
    theme, 
    handleChange
  };

  return (
    <AccessibilityContext.Provider value={ providedValue }>
      {children}
    </AccessibilityContext.Provider>
  );

};

export default AccessibilityProvider;
