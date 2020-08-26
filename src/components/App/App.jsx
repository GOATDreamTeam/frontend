import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../header/Header';
import SplashPage from '../splash-page/SplashPage';
import Footer from '../footer/Footer';
import List from '../list/List';
import DetailPage from '../detail/DetailPage';


export default function App() {
  
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/plants-list/:plantName" component={List} />
        <Route path="/plant-detail/:id" component={DetailPage} />
      </Switch>
      <Footer />
    </Router>
  );
}
  
