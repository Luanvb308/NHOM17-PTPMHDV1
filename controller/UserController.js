
const User = require('../model/user');



class UserController {
    async index(req, res) {
        try {
            const user = await User.find({}); // Truy vấn tất cả nguoi dung
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: 'Có lỗi xảy ra khi truy vấn sản phẩm.' });
        }
    }
}

module.exports = new UserController();
