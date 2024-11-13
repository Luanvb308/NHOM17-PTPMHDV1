const Product = require('../model/product'); // Đường dẫn đến mô hình Product

// Lấy danh sách sản phẩm
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
        res.render("product", { products });  // Render trang product.ejs với danh sách sản phẩm
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        res.status(500).send('Lỗi server');
    }
};

// Xuất các hàm
module.exports = {
    getProducts,
    showProductPage
};