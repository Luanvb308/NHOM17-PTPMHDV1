const Product = require('../model/product'); // Import model Product

// Hàm xây dựng truy vấn lọc dựa trên các bộ lọc đã chọn
const buildFilterQuery = (filters) => {
    let filterQuery = {};

    // Xử lý bộ lọc mức giá
    if (filters.priceFilter) {
        const priceFilter = filters.priceFilter;
        if (priceFilter === 'under-500000') {
            filterQuery.price = { $lt: 500000 };
        } else if (priceFilter === '500000-1000000') {
            filterQuery.price = { $gte: 500000, $lt: 1000000 };
        } else if (priceFilter === '1000000-2000000') {
            filterQuery.price = { $gte: 1000000, $lt: 2000000 };
        } else if (priceFilter === '2000000-3000000') {
            filterQuery.price = { $gte: 2000000, $lt: 3000000 };
        } else if (priceFilter === 'above-3000000') {
            filterQuery.price = { $gt: 3000000 };
        }
    }

    // Xử lý bộ lọc thương hiệu
    if (filters.brandFilter) {
        filterQuery.brand = { $in: filters.brandFilter.split(',') };
    }

    return filterQuery;
};

// Hàm để xử lý yêu cầu lấy sản phẩm với các bộ lọc
const getFilteredProducts = async (req, res) => {
    try {
        // Lấy giá trị từ query string hoặc mặc định là trống
        const filters = {
            priceFilter: req.query.priceFilter || '',
            brandFilter: req.query.brandFilter || ''
        };

        // Xây dựng truy vấn dựa trên bộ lọc
        const filterQuery = buildFilterQuery(filters);

        // Truy vấn CSDL với bộ lọc
        const products = await Product.find(filterQuery);

        // Trả về danh sách sản phẩm đã lọc
        res.render('product', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi server');
    }
};

module.exports = { getFilteredProducts };
