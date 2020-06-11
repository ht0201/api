import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { withRouter } from "react-router";

class withRouterUpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }  
        
    }

    componentDidMount() {
        var idUser = this.props.match.params.id;	
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idUser}`)
            .then(res => {
                 this.setState ({
                     users: res.data
                 });          
            }).catch(error => {
                console.log('error', error)
            })
    }

    inputChangeHandler = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.setState (prevState => {
            prevState.users[name] = value;
            return {
                users: prevState.users
            };
        })
    }

    updateDataHandler = (users) => {
        console.log('Update user have id : ', users.id );
        axios.put('https://jsonplaceholder.typicode.com/posts/' + users.id, users)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                });
        alert (`Your user have id ${users.id} is updated.`)
    }


    render() {
        
        return (
            <div className='updateUser'>
            <h3> Update user (put) </h3>
            <Form>
                <FormGroup>
                    
                    <Label for="userId">UserId</Label>
                    <Input type="text" name="userId" value={this.state.users.userId} 
                    onChange={this.inputChangeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="id">Id</Label>
                    <Input type="text" name="id" value={this.state.users.id} 
                    onChange={this.inputChangeHandler}
                    disabled/>
                </FormGroup>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" value={this.state.users.title} 
                    onChange={this.inputChangeHandler}
                     />
                </FormGroup>
                <FormGroup>
                    <Label for="body">Body</Label>
                    <Input type="text" name="body" value={this.state.users.body}  
                    onChange={this.inputChangeHandler}
                    />
                </FormGroup>
                <Button onClick= {() => this.updateDataHandler(this.state.users)}> Save </Button>
            </Form>
            </div>

        );
    }
}

export default withRouter(withRouterUpdateUser);