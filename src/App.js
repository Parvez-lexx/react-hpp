import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './modules/Login/Page/Login.page';
import Registerpage from './modules/Register/Page/Register.page';
import {CreateUser} from '../src/modules/User/Page/CreateUser';
import {UserList} from '../src/modules/User/Page/UserList';
import 'react-tabs/style/react-tabs.css';
import 'react-table-6/react-table.css';
import "react-datepicker/dist/react-datepicker.css";
import { Table } from '../src/modules/common/components/Table.page';
import { Popup } from '../src/modules/common/components/Popup';
import { PasswordInput } from '../src/modules/Login/Page/PasswordInput';
import { RoleDetails } from '../src/modules/User/RoleDetails';
import { Order } from '../src/modules/Order/Page/Order';
import { Practice } from '../src/modules/Practise/Page/Practice';
import { Practice1 } from '../src/modules/Practise/Page/Practice1';
import { OnboardRequest } from './modules/dealer/Page/OnboardRequest';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Registerpage}>
          <Registerpage />
        </Route>
        <Route path="/onboard-request"><OnboardRequest /></Route>
        <Route path="/practice"><Practice /></Route>
        <Route path="/practice1"><Practice1 /></Route>
        <Route path="/table"><Table /></Route>
        <Route path="/order"><Order /></Route>
        <Route path="/user-list"><UserList /></Route>
        <Route path="/change-password"><PasswordInput /></Route>
        <Route path="/role-details"><RoleDetails /></Route>
        <Route path="/create-user"><CreateUser /></Route>
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
