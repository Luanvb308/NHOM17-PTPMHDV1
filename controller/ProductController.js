const Product = require('../model/product'); // Đường dẫn đến mô hình Product
const mongoose = require('mongoose'); // Đảm bảo bạn đã import mongoose
// Hàm lấy danh sách sản phẩm
const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Lấy tất cả sản phẩm từ MongoDB
        res.json(products); // Trả về dữ liệu JSON cho các yêu cầu API
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        res.status(500).send('Lỗi server');
    }
};

// Hàm render trang sản phẩm
const showProductPage = async (req, res) => {
    try {
        const products = await Product.find(); // Lấy tất cả sản phẩm từ MongoDB
        console.log('Products:', products); // Kiểm tra dữ liệu sản phẩm
        res.render('product', { products });  // Render trang product.ejs với danh sách sản phẩm
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        res.status(500).send('Lỗi server');
    }
};

const getProductById = async (productId) => {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return null; // Hoặc throw error tùy theo logic của bạn
    }
    try {
        const product = await Product.findById(productId); // Tìm sản phẩm theo ID
        return product;
    } catch (error) {
        console.error('Lỗi khi lấy sản phẩm theo ID:', error);
        return null;
    }
};

// Hàm render trang chi tiết sản phẩm
// Hàm xử lý yêu cầu cho trang chi tiết sản phẩm
const getProductDetailsPage = async (req, res) => {
    const productId = req.params.id; // Lấy ID sản phẩm từ URL

    try {
        // Tìm sản phẩm theo ID (dạng chuỗi)
        const product = await Product.findById(productId);
        if (product) {
            res.render('product_detail', { product });
        } else {
            console.log('Product not found');
            res.status(404).send('Sản phẩm không tồn tại');
        }
    } catch (error) {
        console.error('Lỗi khi lấy sản phẩm theo ID:', error);
        res.status(500).send('Lỗi server');
    }
};


// Xuất các hàm
module.exports = {
    getProducts,
    showProductPage,
    getProductDetailsPage,
    getProductById,
};