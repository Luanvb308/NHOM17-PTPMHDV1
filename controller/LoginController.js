const userModel = require("../model/user");
const bcrypt = require('bcryptjs');

exports.login = async (req, res, next) => {
    let msg = "";
    if (req.method == "POST") {
        console.log(req.body);
        try {
            let user = await userModel.userModel.findOne({
                username: req.body.username,
            });

            console.log("user la "+user)

            if (user != null) {
                let checkpass = await bcrypt.compare(req.body.password, user.password); // So sánh mật khẩu nhập vào với mật khẩu đã được băm trong cơ sở dữ liệu
                console.log("checkpass:", checkpass); // Log kết quả của bcrypt.compare
                if (checkpass) { // Sử dụng kết quả của bcrypt.compare để kiểm tra mật khẩu
                    req.session.userLogin = user;
                    msg = "";
                    return res.redirect("/");
                } else {
                    msg = "Sai mật khẩu.";
                    console.log("sai maat khau")
                }
            } else {
                msg = "Tài khoản không tồn tại.";
                console.log("tai khoan khong ton tai");
            }
        } catch (err) {
            console.error(err);
        }
    }
    res.render("login", { msg: msg });
};
