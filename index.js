// import express from 'express'
// import dotenv from 'dotenv'
// import DBcon from './db.js'
// import bodyParser from 'body-parser'
// import cors from 'cors' 

// const app=express()
// dotenv.config()
// const PORT=process.env.PORT  || 3000;

// app.use(bodyParser.json());
// app.use(cors());

// app.use('/auth',)

// app.listen(PORT,()=>{
//     console.log('Listening to the port 3000 ' )
// })

// DBcon()




const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
// const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

