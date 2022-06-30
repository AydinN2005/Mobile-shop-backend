const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const signup = require('./router/signup')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const uri = "mongodb+srv://aydin_n:aydin1384@cluster0.jf5xn2y.mongodb.net/mobileshop"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result=>{
        app.listen(5000)
        console.log('app connected to db')
    })
    .catch(err=>{
        console.log(err)
    })

app.use('/register', signup);
