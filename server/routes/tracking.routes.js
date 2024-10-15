const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { Router } = require('express');

const router = Router();

// CONEXIÓN A LA BASE DE DATOS MONGO
var db_user = process.env.DB_USER;
var db_password = process.env.DB_PASSWORD;
var db_cluster = process.env.DB_CLUSTER;
var db_schema = process.env.DB_SCHEMA;

mongoose.connect(
    `mongodb+srv://${db_user}:${db_password}@${db_cluster}.lbzvr.mongodb.net/${db_schema}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const cxn = mongoose.connection;
cxn.on(
    'error',
    console.error.bind(console, 'Hubo un error estableciendo la conexión con la base de datos: ')
);
cxn.once('open', () => {
    console.log('**************************');
    console.log('Conexión establecida con MongoDB');
});

router.get('/', async (req, res) => {
    
});

module.exports = router;