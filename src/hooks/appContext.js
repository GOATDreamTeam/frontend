import React, { useContext } from 'react'; 

export const AccessibilityContext = React.createContext(); 

export const useAccessibility = () => {
  return useContext(AccessibilityContext);
};

// export const  useDispatch = () => { 
//   const { dispatch } = useContext(AccessibilityContext); 
//   return dispatch;
// };
