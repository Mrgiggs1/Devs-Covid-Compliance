const express = require('express');
const app = express();
const mysql = require('mysql');
const Router = express.Router();
const connection = require('../connection');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

Router.post('/', (req, res, next) => {

    email = req.body.email;
    password = req.body.password;

    connection.query("SELECT * FROM user WHERE email = '" + email +"' AND password = '" + password +"'", (err, rows, fields) => {
        if(!err){
            console.log(rows);
        }else{
            console.log(err)
        }
    })
});

module.exports = Router;