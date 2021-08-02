import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Landing from '../pages/Landing/Landing'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App:React.FC = () => {
  const apps = [
    'https://cors-anywhere.herokuapp.com/https://codenamedolphin.herokuapp.com/',
    'https://cors-anywhere.herokuapp.com/https://forefinder.herokuapp.com/',
    'https://cors-anywhere.herokuapp.com/https://fore-finder-be.herokuapp.com',
    'https://cors-anywhere.herokuapp.com/https://front-end-news.herokuapp.com/'
  ];

  useEffect(() => {
    apps.forEach(app => fetch(app))  
  }, []);

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
