import React, { Component } from 'react' 
import {Link} from 'react-router-dom'

import {ADD_POST} from '../actions'

export default class Home extends Component {

    constructor(props) { 
        super(props)

        this.state = { 
            post: {}
        }
        this.changeForm = this.changeForm.bind(this)
        this.addPost = this.addPost.bind(this)
    }
    addPost(event) { 
        event.preventDefault()  
        let post = this.state.post 
        ADD_POST(post)   
            .then(  
                this.props.history.push('/posts') 
            )  
    }    
    changeForm(event) {  
        const {name, value} = event.target; 
        
        this.setState( { 
            post: { 
                ...this.state.post,
                [name]: value
             }
        })
    }
    render() {
        return (
            <div className="card card-default shadow">
                <div className="card-header">
                    <h4>Create a New Post</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={this.addPost}>
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <label htmlFor="title-post">Post title:</label>
                                    <input type="text" name='title' id="title-post" autoFocus className="form-control" required onChange={this.changeForm} value={this.state.post.title} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <label htmlFor="content-post">Post content:</label>
                                    <textarea  name='content'  id="content-post" className="form-control" onChange={this.changeForm} value={this.state.post.content}  required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group ">
                                   <button type="submit" className="btn pl-4 pr-4 btn-react mr-2"> Create</button> 
                                   <Link to='/posts'  className="btn  btn-danger">
                                        Cancel
                                   </Link> 
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
