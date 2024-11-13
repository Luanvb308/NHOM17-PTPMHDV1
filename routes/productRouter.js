const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController'); // Đường dẫn đến controller

// Route cho trang sản phẩm
router.get('/', ProductController.showProductPage); // Route cho trang sản phẩm

// Xuất router
module.exports = router;