import React, { Component } from "react";
import { Container, Table, Button} from 'reactstrap';
import axios from "axios";


class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        const selectUser = res.data.slice(0,10);
        this.setState({
          users: selectUser
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteDataHandler = (user) => {
    
    console.log('Delete id', user.id);
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + user.id)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
    alert (`Your user have id ${user.id} is deleted.`)
        
  }
// use thay doi id trong 1 trang
  // componentWillReceiveProps(nextProps) {
  //     if(this.props.id !== nextProps.id) {

  //     }
  // }

  render() {
    const { users } = this.state;
    
    return (
      <Container>
        <h2> List Users </h2>
        <Table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Get Details</th>
              <th>Edit</th>
              <th>Delete</th>


              {/* <th>#Id</th>
              <th>User Id</th>
              <th>Employee Salary</th>
              <th>Employee Age</th>
              <th>Profile Image</th> 
              <th>Get Details</th>
              <th>Edit</th>
              <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
              {users.map((user, index) => (
                <React.Fragment key={index}>
                  <tr>
                  <td> {user.userId} </td>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
                  <td> <a href={`/detail/${user.id}`} > Detail </a> </td>
                  <td> <a href={`/update/${user.id}`} > Update </a> </td>
                  <td> <Button onClick= {() => this.deleteDataHandler(user)} > Delete </Button> </td>
                  
                  {/* <td> {user.userId} </td>
                  <td>{user.employee_name}</td>
                  <td>{user.employee_salary}</td>
                  <td>{user.employee_age}</td>
                  <td>{user.profile_image}</td>
                  <td> <a href={`/detail/${user.id}`} target='_blank'> Details </a> </td> */}
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ListUser;
