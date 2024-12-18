// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


import express from 'express';
import dotenv, { config } from 'dotenv';
import mongoose, { connect } from 'mongoose';
import bookRoute from './route/bookRoute.js';

const app=express();

 dotenv.config();

const PORT=process.env.PORT || 4000;

const URI=process.env.MongoDbURI;





 


// connect to mongodb

try {
    mongoose.connect
    (URI,{

 useNewUrlParser:true,
 useUnifiedTopology:true
    })

    console.log("connect mongoDb Success ")
    

} catch (error) {
    console.log("error",error)
    
}


// route define

app.use('/book',bookRoute);




app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})



