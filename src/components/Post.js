import React, { Component } from 'react';
import { Container, Table, Button} from 'reactstrap';
import axios from "axios";
import {Link} from 'react-router-dom';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
          .then(res => {
            const selectUser = res.data.slice(0,10);   //lay 10 obj
            this.setState({
              posts: selectUser
            });
          })
          .catch(error => {
            console.log(error);
          });    
    }

    deleteDataHandler = (posts) => {
      console.log('Delete id', posts.id);
      axios.delete('https://jsonplaceholder.typicode.com/posts/' + posts.id)
            .then(res => {
              console.log(res);
            })
            .catch(error => {
              console.log(error);
            });
      alert (`Your post id ${posts.id} is deleted.`)    
    }

    render(){
        const { posts } = this.state;
        return (
          <Container>
            <h2> List Post </h2>
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
                </tr>
              </thead>
              <tbody>
                  {posts.map((post, index) => (
                    
                      <React.Fragment key={index}>
                        <tr>
                          <td> {post.userId} </td>
                          <td> {post.id} </td>
                          <td> {post.title} </td>
                          <td> {post.body} </td>
                          <td> <Link to={`/detail/${post.id}`} key={post.id} >  Detail </Link> </td>
                          <td> <Link to={`/update/${post.id}`} key={post.id} >  Update </Link> </td>
                          <td> <Button onClick= {() => this.deleteDataHandler(post)} > 
                                      Delete 
                              </Button> 
                          </td>        
                        </tr>
                      </React.Fragment>
                    
                  ))}
              </tbody>
            </Table>
          </Container>
        );
    }
}

export default Post;