import React from 'react'; 
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import Header from './Components/Header'

import Home from './Components/Home'
import Index from './Components/Index'
import Edit from './Components/Edit'
import Create from './Components/Create'

function App() {
  return (
    <div className='container'>
     
      <Router>
        <Header/>
        <div className="row justify-content-center">
            <div className="col">
            <Switch>
                <Route exact path='/posts' component={Index} />
                <Route exact path='/edit/:id' component={Edit} />
                <Route exact path='/create/' component={Create} />
                <Route exact path='/' component={Home} />
            </Switch>
            </div>
        </div>
         
      </Router>
    </div>
  );
}

export default App;
