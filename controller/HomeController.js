// controller/HomeController.js

const Product = require('../model/product');
const connection = require('../db/index');

// HomeController là một hàm xử lý request và render view
const HomeController = (req, res) => {
  res.render('home');  // Giả sử 'home' là một view hợp lệ
};

// Xuất hàm HomeController
module.exports = HomeController;
