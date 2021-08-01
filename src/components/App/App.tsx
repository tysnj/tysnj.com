import React from 'react';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App:React.FC = () => (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route 
          exact path='/'
          render={() => (
            <Landing>

            </Landing>
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

  );

export default App;
