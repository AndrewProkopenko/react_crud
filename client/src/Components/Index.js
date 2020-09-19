import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import {FETCH_POST} from '../actions'
import {DELETE_POST} from '../actions'

export default class Home extends Component {

    constructor(props) { 
        super(props)
        this.state = { 
            post: []
        }
         
        this.deletePost = this.deletePost.bind(this)
    } 
    componentWillUpdate() {  
        this.fetchPost()
    }

    componentDidMount() { 
        this.fetchPost()
        console.log(this.state.post.length)
    }

    fetchPost() {
        FETCH_POST()
        .then( response => { 
            this.setState({ 
                post: response
            })
        }) 
    }

    deletePost(id) { 
        DELETE_POST(id) 
            .then( () => {  
                this.setState({
                    post:  this.state.post.filter((post) => post._id  !== id )
                }) 
            })
       
    }
    render() {
        return (
            <div className="card card-default shadow">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <h4>Posts</h4>  
                    <Link to={'/create'} className='btn btn-react'>Add Post</Link>
                </div>
                <div className="card-body position-relative" >
                    { 
                        this.state.post.length>0 &&
                        <div className="table-responsive" >
                            <table className="table table-hover"> 
                                <thead>
                                <tr>
                                        <th>Title</th>
                                        <th>Content</th>
                                        <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.post.map( (post) => { 
                                            return( 
                                                <tr key={post._id}>
                                                    <td> 
                                                        { post.title} 
                                                    </td>
                                                    <td>
                                                        {post.content}
                                                    </td>
                                                    <td>
                                                        {/* <router-link :to="{name:'edit', params:{id: post._id}}" className="btn btn-vue">
                                                            <i className="fa fa-edit"></i>
                                                        </router-link> */}
                                                        <Link to={`/edit/${post._id}`} className="btn btn-react">
                                                            <i className="fa fa-edit"></i>
                                                        </Link>
                                                        <button className="btn btn-danger ml-2" onClick={() => { this.deletePost(post._id) }}>
                                                            <i className="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>   
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    }
                    {
                         this.state.post.length===0 &&    
                         <div className="d-flex justify-content-between">  
                            <span>  The list of posts is empty... </span>
                            <span className="empty-post">Go to Create!</span> 
                        </div>
                    }
                    {/* <div  v-if="!posts.length  && !preloaderShow " className="d-flex justify-content-between"> 
                        
                            <span>  The list of posts is empty... </span>
                            <span className="empty-post">Go to Create!</span>
                        
                    </div> */}
                    {/* <Squares v-if="preloaderShow" /> */}
                </div>
               
            </div>
        )
    }
}
