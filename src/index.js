import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import AccessibilityProvider from './providers/AppProvider';

render(
  <AccessibilityProvider>
    <App />
  </AccessibilityProvider>,
  document.getElementById('root')
);
