import React from 'react';
import './App.css';
import {Link, Route, withRouter} from 'react-router-dom';

import Signin from './components/Signin.js';
import FriendList from './components/FriendList.js';
import ProtectedRoute from './utils/ProtectedRoute.js';

function App() {
  return (
    <div className="App">
      <Link to="/signin">sign in </Link>
      <Route exact path='/signin' component={Signin}/>
      <ProtectedRoute exact path="/friendlist" component={FriendList} />
    </div>
  );
}

export default withRouter(App);
