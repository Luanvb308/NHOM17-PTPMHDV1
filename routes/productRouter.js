// routes/productRouter.js
const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.get('/', ProductController.showProductPage);
router.get('/:id', ProductController.getProductDetailsPage);

module.exports = router;
