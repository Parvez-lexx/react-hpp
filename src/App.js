import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './modules/Login/Page/Login.page';
import User from './modules/User/Page/User.page';
import Registerpage from './modules/Register/Page/Register.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/register" component={Registerpage}>
          <Registerpage />
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
