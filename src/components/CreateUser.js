import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {
                userId: '',
                title: '',
                body: ''
            }
        }  
        
    
    }

    postDataHandler= () => {
        const {users} = this.state;
        console.log(users);
      
        var data = {
            userId: users.userId,
            title: users.title,
            body: users.body
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
        if (window.confirm(`Your user ${users.userId} is created. Do you want to go list user page ?`))
            {
                return window.location.href='/';
            }
        else{
            return; 
        }
        
    }

    inputChangeHandler = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        
        
        this.setState (prevState => {
            prevState.users[name] = value;
            return {
                users: prevState.users    
            };
            
        })
    }

    render() {
        
        return(
            <div className='NewPost'>
                <h3> Create new user </h3>
                <Form>
                    <FormGroup>
                        <Label for="userId">UserId</Label>
                        <Input type="text" name="userId" value={this.state.users.userId} 
                        placeholder="input number UserId"
                        onChange={this.inputChangeHandler}
                        
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" value={this.state.users.title} 
                        placeholder="input text Title"
                        onChange={this.inputChangeHandler}
                         />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Body">Body</Label>
                        <Input type="text" name="body" value={this.state.users.body} 
                        placeholder="input text Body" 
                        onChange={this.inputChangeHandler}
                        />
                    </FormGroup>
                    <Button onClick= {() => this.postDataHandler()}> Save </Button>
                </Form>
            </div>
        );
    }
}

export default CreateUser;