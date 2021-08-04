const express = require('express');
const app = express();
const mysql = require('mysql');
const Router = express.Router();
const connection = require('../connection');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

Router.get('/', (req, res) => {
    connection.query('SELECT * from user', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/', (req, res, next) => {
   
    console.log(req.body);

    Id = req.body.id;
    userNumber = req.body.userNumber;
    email = req.body.email;
    fname = req.body.firstName;
    lname = req.body.lastName;
    address = req.body.address;
    password = req.body.password;
    
    gen = (req.body.id).substring(6, 7);
    if (gen>=5) {
        gender = "Male";
    }
    else{
        gender = "Female";
    }

    role = "student";
    phone = req.body.phone; 
    //ID_num	userNumber	email	Name	surname	address	password	gender	role	contact
    connection.query("INSERT INTO user VALUES('"+ Id +"', '"+ userNumber +"', '" + email +"', '"+ fname +"', '"+ lname +"', '"+ address +"', '"+ password +"', '"+ gender +"', '"+ role +"', '"+ phone +"')", (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

module.exports = Router;