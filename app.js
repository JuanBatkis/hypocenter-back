//Add dotenv
require('dotenv').config();


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Add mongoose to connect with DB
const mongoose = require('mongoose');
const cors = require('cors');

//Add mongoose conection
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((x)=>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
}).catch((err)=>{
    console.log('Error connecting to mongo', err)
});


const app = express();

//Use cors to give permission to other apps
app.use(
    cors({
        origin: ['http://localhost:3000'],
        credentials: true,
    })
)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//This are the routes
//Is best practice to add prefix api
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


app.use('/api', indexRouter);
app.use('/api/user', usersRouter);

module.exports = app;
