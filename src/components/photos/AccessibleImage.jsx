/* eslint-disable react/prop-types */
import React from 'react'; 
import { createUseStyles } from 'react-jss';  
import { useAccessibility } from '../../hooks/appContext';

const useStyles = createUseStyles({
  img: {
    filter: theme => theme === 'standard' ? 'grayscale(0%)' : 'grayscale(100%)'
  }
});

const AccessibleImage = (props) => { 
  
  const { theme } = useAccessibility();
  const classes = useStyles(theme);

  return <img {...props} className={`${classes.img} ${props.className}`}/>;
};

export default AccessibleImage;
