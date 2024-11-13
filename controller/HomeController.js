// controller/HomeController.js

const Product = require('../model/product');
const connection = require('../db/index');

// HomeController là một hàm xử lý request và render view
const HomeController = (req, res) => {
  const username = req.session.username||null; 
  res.render('home', {username: username});  // Giả sử 'home' là một view hợp lệ
};

// Xuất hàm HomeController
module.exports = HomeController;
