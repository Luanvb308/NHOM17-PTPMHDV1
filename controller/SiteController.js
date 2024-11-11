const Product = require('../model/product');
const connection = require('../db/index')





class SiteController {
    async index(req, res) {
        try {
            const products = await Product.find({}); // Truy vấn tất cả sản phẩm
            res.json(products);
        } catch (err) {
            res.status(500).json({ error: 'Có lỗi xảy ra khi truy vấn sản phẩm.' });
        }
    }
}
module.exports = new SiteController();
