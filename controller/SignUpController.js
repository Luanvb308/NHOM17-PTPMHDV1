// controllers/signup.js
const userModel = require("../model/user");
const bcrypt = require('bcryptjs');  // Nếu cài đặt bcryptjs

// Hàm showSignupPage để render trang signup (GET)
exports.showSignupPage = (req, res) => {
    res.render("signup/signup", { msg: "" });  // Render trang signup.ejs
};

// Hàm signup để xử lý đăng ký người dùng (POST)
exports.signup = async (req, res) => {
    let msg = "";
    if (req.method === "POST") {
        // Kiểm tra các trường cần thiết
        if (!req.body.username || !req.body.passwd || !req.body.email) {
            msg = "Vui lòng điền đầy đủ thông tin!";
            return res.render("signup/signup", { msg: msg });
        }

        // Kiểm tra nếu tên người dùng đã tồn tại
        const checkname = await userModel.findOne({
            name: req.body.username,  // Chắc chắn rằng bạn đang dùng đúng tên trường
        });

        if (checkname) {
            msg = "Username đã tồn tại.";
            return res.render("signup/signup", { msg: msg });
        }

        // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp không
        if (req.body.passwd !== req.body.confirmpasswd) {
            msg = "Mật khẩu và xác nhận mật khẩu không khớp.";
            return res.render("signup/signup", { msg: msg });
        }

        // Kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = req.body.email;
        if (!emailRegex.test(email)) {
            msg = "Email không hợp lệ.";
            return res.render("signup/signup", { msg: msg });
        }

        // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(req.body.passwd, salt);

        // Tạo đối tượng người dùng mới và lưu vào cơ sở dữ liệu
        let newUser = new userModel({
            name: req.body.username,
            password: hashedPassword,
            email: req.body.email,
        });

        try {
            // Lưu người dùng mới vào cơ sở dữ liệu
            await newUser.save();
            // Sau khi lưu thành công, chuyển hướng đến trang login
            res.redirect("/login");
        } catch (err) {
            console.error(err);
            msg = "Đã xảy ra lỗi khi tạo người dùng.";
            return res.render("signup/signup", { msg: msg });
        }
    }

    // Render trang đăng ký với thông báo lỗi nếu có
    res.render("signup/signup", { msg: msg });
};
