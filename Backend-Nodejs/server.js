const express = require('express');
const mysql = require('mysql');
const ClientRoutes = require('./routes/client')
const connection = require('./connection');
const cors = require('cors'); 
const app = express();

app.use(cors());
app.use('/client', ClientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server started on port ' + PORT)); 