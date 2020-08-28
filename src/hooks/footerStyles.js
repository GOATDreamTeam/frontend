import { createUseStyles } from 'react-jss'; 

export const useFooterStyles = createUseStyles({

  footerLink: { 
    'text-decoration': 'none', 
    color: theme => theme === 'standard' ? '#214044' : 'black'
  }
});
