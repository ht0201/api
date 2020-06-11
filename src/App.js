import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'reactstrap';

import './App.css';
import DetailUser from './components/DetailUser';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">  
      <Router>
        <Switch>
          <Route path="/new">
             <CreateUser />
          </Route>
          <Route path="/">
           <a href='/new' > Create new user</a>
            <ListUser />
          </Route>
          <Route path="/detail/:id">
              <DetailUser />
          </Route>
          <Route path="/update/:id">
              <UpdateUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
