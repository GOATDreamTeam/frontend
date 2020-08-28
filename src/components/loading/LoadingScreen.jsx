import React from 'react';
import LoadingImage from './loadscreen.svg';
import FactText from './FactText';
import { loadingStyle } from '../../hooks/loadingStyle';




const LoadingScreen = () => {
  const style = loadingStyle();
  
  return (
    <>
      <div className={style.loadingDiv}>
        <LoadingImage />
        <FactText />
      </div>
    </>
  );
};

export default LoadingScreen;

