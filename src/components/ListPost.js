import React, { Component } from "react";
import {Route, Link} from "react-router-dom";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import Post from './Post';
import CreatePost from "./CreatePost";
import Detail from "./Detail";
import UpdatePost from "./UpdatePost";

class ListPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  
  // use thay doi id trong 1 trang
  // componentWillReceiveProps(nextProps) {
  //     if(this.props.id !== nextProps.id) {

  //     }
  // }

  render() {

    return (
        <div className="header">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink> 
                    <Link to="/">List post </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                  <Link to={{ pathname:'/new' }}>New post </Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

        <Route path="/" exact component={Post} />
        <Route path="/new" component={CreatePost} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/update/:id" component={UpdatePost} />  
      </div>  
    )
  }
}
export default ListPost;
