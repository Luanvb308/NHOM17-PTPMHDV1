const userModel = require("../model/user");
const bcrypt = require('bcryptjs');
const session = require('express-session');

exports.login = async (req, res, next) => {
    let msg = "";
    
    if (req.method == "POST") {
        console.log(req.body); // In thông tin gửi từ form

        try {
            let user = await userModel.userModel.findOne({
                username: req.body.username,
            });

            console.log("User:", user); // In thông tin người dùng tìm thấy từ cơ sở dữ liệu

            if (user != null) {
                // Kiểm tra mật khẩu với bcrypt
                let checkpass = await bcrypt.compare(req.body.password, user.password);
                console.log("Checkpass:", checkpass); // Log kết quả so sánh mật khẩu

                if (checkpass) {
                    // Lưu thông tin người dùng vào session khi đăng nhập thành công
                    req.session.userLogin = user;
                    req.session.username = user.username;  // Lưu tên người dùng vào session

                    msg = "Đăng nhập thành công!";
                    return res.redirect("/");  // Sau khi đăng nhập thành công, chuyển hướng về trang chủ
                } else {
                    msg = "Sai mật khẩu.";
                    console.log("Mật khẩu sai.");
                }
            } else {
                msg = "Tài khoản không tồn tại.";
                console.log("Tài khoản không tồn tại.");
            }
        } catch (err) {
            console.error("Lỗi khi xử lý đăng nhập:", err);
            msg = "Có lỗi xảy ra. Vui lòng thử lại.";
        }
    }

    // Nếu có lỗi hoặc đăng nhập không thành công, render lại trang login với thông báo
    res.render("login", { msg: msg }); 
};
