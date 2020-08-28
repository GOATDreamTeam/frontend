import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
require ('./App.css');
import Header from '../header/Header';
import SplashPage from '../splash-page/SplashPage';
// import Footer from '../footer/Footer';
import List from '../list/List';
import DetailPage from '../detail/DetailPage';
import AboutUs from '../aboutus/AboutUs';
import { useAccessibility } from '../../hooks/appContext';
import { useStyles } from '../../hooks/globalStyles';


export default function App() {

  const { theme } = useAccessibility();
  const { basicDisplay } = useStyles(theme);
  
  return (
    <div className={basicDisplay}>

      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route path="/plants-list/:plantName" component={List} />
          <Route path="/plant-detail/:id" component={DetailPage} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </Router>

    </div>
    
  );
}
  
