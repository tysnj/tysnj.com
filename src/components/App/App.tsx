import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App:React.FC = () => {
  const apps = [
    'http://bright-bucket.surge.sh/',
    'http://forefinder.herokuapp.com/',
    'https://front-end-news.herokuapp.com/'
  ];

  useEffect(() => {
    wakeUpApps();
  }, []);

  const wakeUpApps = () => {
    apps.forEach(app => fetch(app))
  }
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route 
          exact path='/'
          render={() => (
            <Landing/>
          )}
        />
        <Route path='/about'
          render={() => (
            <Navbar />
          )}
        />
        <Route path='/projects'
          render={() => (
            <Navbar />
          )}
        />
        <Redirect to='/' />
      </Switch>
    </Router>  

  )
};

export default App;
