const express = require('express');
const mysql = require('mysql');
const Router = express.Router();
const connection = require('../connection');

Router.get('/', (req, res) => {
    connection.query('SELECT * from client', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});
Router.post('/', (req, res) => {
    let clientData = req.body;
    connection.save(clientData);
});

module.exports = Router; 