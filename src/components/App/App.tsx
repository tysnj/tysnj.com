import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App:React.FC = () => (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route 
          exact path='/'
          render={() => (
            <Home>

            </Home>
          )}
        />
        <Redirect to='/' />
      </Switch>
    </Router>  

  );

export default App;
