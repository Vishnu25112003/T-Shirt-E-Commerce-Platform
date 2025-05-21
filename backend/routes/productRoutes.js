// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct
} = require('../controllers/productController');

router.post('/add', createProduct);           // POST via Postman
router.get('/', getAllProducts);              // GET for frontend
router.get('/:id', getProductById);           // Optional
router.delete('/:id', deleteProduct);         // Optional

module.exports = router;
