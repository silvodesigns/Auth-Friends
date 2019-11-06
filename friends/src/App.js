import React from 'react';
import './App.css';
import {Link, Route, withRouter} from 'react-router-dom';

import Signin from './components/Signin.js';

function App() {
  return (
    <div className="App">
      <Link to="/signin">sign in </Link>
      <Route exact path='/signin' component={Signin}/>
      
    </div>
  );
}

export default App;
