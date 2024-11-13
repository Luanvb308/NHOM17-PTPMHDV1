// Tạo route đăng xuất
var express = require("express");
var router = express.Router();
router.get('/', (req, res) => {
    // Xóa session
    req.session.destroy((err) => {
        if (err) {
            console.log("Lỗi khi đăng xuất: ", err);
        }
        res.redirect('/login');  // Sau khi đăng xuất, chuyển hướng về trang chủ hoặc trang login
    });
});
module.exports = router;
