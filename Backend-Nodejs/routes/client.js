const express = require('express');
const app = express();
const mysql = require('mysql');
const Router = express.Router();
const connection = require('../connection');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

Router.get('/', (req, res) => {
    connection.query('SELECT * from client', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/', (req, res, next) => {
   
    console.log(req.body);
    id = 2;
    fullname = req.body.fullname;
    phone = req.body.phone; 
    cough = req.body.cough;
    breathing = req.body.breathing;
    symptoms = req.body.symptoms;
    fever = req.body.fever;
    symptom = req.body.symptom;
    contact = req.body.contact;
    contactCovid = req.body.contactCovid;
    travelled = req.body.travelled;
    appointment = req.body.appointment;

    connection.query("INSERT INTO client VALUES('"+ id +"', '"+ fullname +"', '" + phone +"', '"+ cough +"', '"+ breathing +"', '"+ symptoms +"', '"+ fever +"', '"+ symptom +"', '"+ contact +"', '"+ contactCovid +"', '"+ travelled +"', '"+ appointment +"')", (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

module.exports = Router;