const express = require('express');
const Product = require('../models/product');  // Importa el modelo de producto
const router = express.Router();

// Crear un nuevo producto
router.post('/products', async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await Product.create({ name, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

// Obtener todos los productos
router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

module.exports = router;