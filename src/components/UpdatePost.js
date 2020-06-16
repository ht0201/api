import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


class UpdatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
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

    inputChangeHandler = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.setState (prevState => {
            prevState.posts[name] = value;
            return {
                posts: prevState.posts
            };
        })
    }

    updateDataHandler = (posts) => {
        console.log('Update post id : ', posts.id );
        axios.put('https://jsonplaceholder.typicode.com/posts/' + posts.id, posts)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                });
        alert (`Your post id ${posts.id} is updated.`)
    }

    render() {
        
        return (
            <div className='updatePost'>
            <h3> Update Post (put) </h3>
            <Form>
                <FormGroup>
                    
                    <Label for="userId">UserId</Label>
                    <Input type="text" name="userId" value={this.state.posts.userId} 
                    onChange={this.inputChangeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="id">Id</Label>
                    <Input type="text" name="id" value={this.state.posts.id} 
                    onChange={this.inputChangeHandler}
                    disabled/>
                </FormGroup>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" value={this.state.posts.title} 
                    onChange={this.inputChangeHandler}
                     />
                </FormGroup>
                <FormGroup>
                    <Label for="body">Body</Label>
                    <Input type="text" name="body" value={this.state.posts.body}  
                    onChange={this.inputChangeHandler}
                    />
                </FormGroup>
                <Button onClick= {() => this.updateDataHandler(this.state.posts)}> Save </Button>
            </Form>
            </div>

        );
    }
}

export default UpdatePost;