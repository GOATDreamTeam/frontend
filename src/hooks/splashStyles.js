import { createUseStyles } from 'react-jss'; 

export const useSplashStyles = createUseStyles({

  imageCarousel: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'padding-top': '1rem', 
    'padding-bottom': '4rem'
    //ask Ryan about this page tomorrow 
  },

  appIntro: {
    padding: '3rem',
    'text-align': 'center'
  }
});
