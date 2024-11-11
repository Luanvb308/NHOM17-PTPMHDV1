var express = require("express");
var router = express.Router();
var registerController = require("../controller/SignUpController");
var checkLogin = require("../middleware/checkLogin");

// Route GET để hiển thị trang đăng ký
router.get("/", checkLogin.noRequireLogin, registerController.showSignupPage);  // Gọi đúng hàm showSignupPage từ controller

// Route POST để xử lý form đăng ký
router.post("/", checkLogin.noRequireLogin, registerController.signup);

module.exports = router;
