const express = require('express')
const postRoutes = express.Router()
let Post = require('./post.model') 

postRoutes.route('/add').post(function(req, res) { 
    let post = new Post(req.body)
    post.save()  
        .then( 
            () => { 
                res.status(200).json({'post': 'post added'})
            }
        )
        .catch ( 
            (err) => { 
                // res.status(400).send('error')
            }
        )
})
postRoutes.route('/').get(function(req, res) { 
    Post.find((err, posts) => {
        if(err) { 
            res.json(err)
        } else { 
            res.json(posts)
        }
    })
})

postRoutes.route('/edit/:id').get(function(req, res) { 
    let id = req.params.id
    Post.findById( id, (err, post) => { 
        if(err) { 
            res.json(err)
        } 
        res.json(post)
    })
})

postRoutes.route('/update/:id').post( function( req, res) { 
    let id = req.params.id
    Post.findById( id, (err, post) => { 
        if(err) { 
            res.json(err)
        } 
        if(!post) { 
            res.status(404).send('Post not found')
        } else { 
            post.title = req.body.title
            post.content = req.body.content
            post.save()
                .then( () => { 
                    res.json('Updated done')
                })
                .catch( (err) => { 
                    res.status(400).send('Error')
                })
        }

    })
})

postRoutes.route('/delete/:id').delete(function(req, res) { 
    Post.findByIdAndRemove({_id: req.params.id}, (err) => { 
        if(err) { 
            res.json(err)
        } else { 
            res.json('Deleted successfully')
        }
    })
})

module.exports = postRoutes