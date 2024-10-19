const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Router } = require('express');
const router = Router();

dotenv.config();

// CONEXIÓN A LA BASE DE DATOS MONGO
var db_user = process.env.DB_USER;
var db_password = process.env.DB_PASSWORD;
var db_cluster = process.env.DB_CLUSTER;

mongoose
  .connect(`mongodb+srv://${db_user}:${db_password}@${db_cluster}.6to7a.mongodb.net/Comercol?retryWrites=true&w=majority`)
  .then(() => console.log('Conexión establecida con MongoDB'))
  .catch(err => console.log('Hubo un error estableciendo la conexión con la base de datos: ', err));

var productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  t_num: { type: String, required: true },
  status: { type: String, required: true }},
  { strict: false });

var productModel = mongoose.model('Product', productSchema);

router.get('/', async (req, res) => {
  try {
    let { t_num } = req.query;
    const product = await productModel.findOne({ t_num: t_num }, 'status');

    if (product) {
      console.log('Producto encontrado:', product);
      res.json({ status: product.status });
    } else {
      console.log(t_num, ' No encontrado.');
      res.status(404).json({ message: 'El número de guía no ha sido encontrado.' });
    }
  } catch (err) {
    console.log('Error en el servidor: ', err);
    res.status(500).json({ error: 'Error en el servidor al buscar el producto.' });
  }
});

module.exports = router;
