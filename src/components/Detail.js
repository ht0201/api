import React, { Component } from 'react';
import { Container, Table} from 'reactstrap';
import axios from 'axios';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state ={
            posts:[]
        }
    }

    componentDidMount() {
        var idPost = this.props.match.params.id;	

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
            .then(res => {
                 this.setState ({
                     posts: res.data
                 });          
            }).catch(error => {
                console.log('error', error)
            })
    }

    render(){
        const {posts} = this.state;
        
        return (
                <Container>
                <h2> Post Detail </h2>
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
                            <td> {posts.userId} </td>
                            <td> {posts.id} </td>
                            <td> {posts.title} </td>
                            <td> {posts.body} </td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
        )
    }
}

export default Detail;