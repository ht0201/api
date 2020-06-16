import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './App.css';
import DetailUser from './components/DetailUser';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">  
      <Router>

        <div className="header">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink> 
                    <Link to="/">List user </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                   <Link to="/new">New user </Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <div className="body">
          <Switch>
            <Route path="/new">
              <CreateUser />
            </Route>
            <Route exact path="/">
              <ListUser />
            </Route>
            <Route path="/detail/:id">
                <DetailUser />
            </Route>
            <Route path="/update/:id" >
              <UpdateUser />   
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
