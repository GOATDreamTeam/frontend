import React from 'react';
import { Link } from 'react-router-dom';
import { useFooterStyles } from '../../hooks/footerStyles';
import { useAccessibility } from '../../hooks/appContext';

export default function Footer() {

  const { theme } = useAccessibility();
  const classes  = useFooterStyles(theme);

  return (
    <div  style={{ textAlign: 'center' }}>
      <Link className={classes.footerLink} to="/about-us">About the Developers</Link>
    </div>
  );
}
