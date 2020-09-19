 const express = require('express')

 const app = express()
 const bodyParser = require('body-parser')
 const PORT = 5000
 const cors = require('cors')
 const mongoose = require('mongoose')
 const config = require('./DB')
 const postRoute = require('./post.route')

 mongoose.Promise = global.Promise
 mongoose.connect(config.DB, {useNewUrlParser: true})
    .then( 
        () => { 
        console.log('DB connect done')
        }, 
        (err) => { 
            console.log(err)
        }
    )


 app.use(cors())
 app.use(bodyParser.urlencoded({extended: true}))
 app.use(bodyParser.json())

 app.use('/posts', postRoute)

 app.listen(PORT, function() { 
     console.log(`Server is running on port: ${PORT}`)
 })
