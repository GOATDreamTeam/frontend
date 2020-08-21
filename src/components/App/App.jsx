import React, { useState } from 'react';
import Header from './header/Header';

export default function App() {

  const [theme, useTheme] = useState('light');
  
  return <>
    <Header useTheme={useTheme} theme={theme}/>
  </>;
}
  
