import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './modules/Login/Component/Page/Login.page';
import User from './modules/User/Page/User.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="*">
          {
            ()=> "No Route Found"
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
