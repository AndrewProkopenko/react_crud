import React, { Component } from 'react'

import {EDIT_POST, UPDATE_POST} from '../actions'

import { Link } from 'react-router-dom'

export default class Home extends Component {

    constructor(props) {  
        super(props)
        this.state = { 
            post: []
        }
        this.changeForm = this.changeForm.bind(this)
        this.editPost = this.editPost.bind(this)
    }

    componentDidMount() {  
        EDIT_POST(this.props.match.params.id)
            .then( 
               (response) => {  
                   const {title, content} = response
                    this.setState({ 
                        post: {
                            title: title, 
                            content: content
                        }
                    })
               }
            )
    }
    editPost(event) { 
        event.preventDefault()  
        let post = this.state.post  
        UPDATE_POST( this.props.match.params.id, post)
            .then(
                () => { 
                    this.props.history.push('/posts') 
                }
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
                    <h4>Edit Post</h4>
                </div> 
                <div className="card-body">
                    <form onSubmit={this.editPost}>
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
                                   <button type="submit" className="btn pl-4 pr-4 btn-react mr-2">Edit</button> 
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
