const express = require('express');
const router = express.Router();
const productController = require('../controller/LocProductController'); // Đường dẫn tới controller

// Route để lấy sản phẩm dựa trên các bộ lọc
router.get('/', productController.getFilteredProducts);

module.exports = router;
