import React, { Component } from 'react';
import { withRouter}  from "react-router";
import { Container, Table} from 'reactstrap';
import axios from 'axios';
import { Link } from "react-router-dom";

class withRouterDetailUser extends Component {
    constructor(props){
        super(props);
        this.state ={
            user:[]
        }
    }

    componentDidMount() {
        var idUser = this.props.match.params.id;	
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idUser}`)
            .then(res => {
                console.log(res);
                 this.setState ({
                     user: res.data
                 });          
            }).catch(error => {
                console.log('error', error)
            })
    }

    render(){
        const {user} = this.state;
        
        return (
                <Container>
                <h2> User Detail </h2>
                <Table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {user.userId} </td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
        )
    }
}

export default withRouter(withRouterDetailUser);