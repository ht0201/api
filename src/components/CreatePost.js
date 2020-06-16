import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class  CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: {
                userId: '',
                title: '',
                body: ''
            }
        }  
    }

    postDataHandler= () => {
        const {posts} = this.state;
        console.log(posts);
      
        var data = {
            userId: posts.userId,
            title: posts.title,
            body: posts.body
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
        if (window.confirm(`Your new post is created. Do you want to go list post page ?`))
            {
                 this.props.history.goBack();
            }
        else{
            return; 
        }
        
    }

    inputChangeHandler = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        
        
        this.setState (prevState => {
            prevState.posts[name] = value;
            return {
                posts: prevState.posts    
            };
            
        })
    }

    render() {
        
        return(
            <div className='NewPost'>
                <h3> Create new post </h3>
                <Form>
                    <FormGroup>
                        <Label for="userId">UserId</Label>
                        <Input type="text" name="userId" value={this.state.posts.userId} 
                        placeholder="input number UserId"
                        onChange={this.inputChangeHandler}
                        
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" value={this.state.posts.title} 
                        placeholder="input text Title"
                        onChange={this.inputChangeHandler}
                         />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Body">Body</Label>
                        <Input type="text" name="body" value={this.state.posts.body} 
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

export default CreatePost;