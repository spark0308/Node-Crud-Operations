const express=require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app=express();


const connectDB = require('./server/database/connection')

app.use(morgan('tiny'));

connectDB();

app.use(bodyparser.urlencoded({extended: true}))

app.use('/', require('./server/routes/router'));

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000")
});