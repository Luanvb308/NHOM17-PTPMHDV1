exports.requireLogin = (req, res, next) => {
    if (req.session.userLogin) {
      next();
    } else {
      res.redirect("/login");
    }
  };
  
  exports.noRequireLogin = (req, res, next) => {
    if (!req.session.userLogin) {
      next();
    } else {
      res.redirect("/");
    }
  };
  // checkLogin.js
module.exports.noRequireLogin = (req, res, next) => {
  // Giả sử bạn muốn cho phép truy cập mà không cần đăng nhập
  // Bạn có thể thêm logic kiểm tra trạng thái đăng nhập ở đây
  next(); // Cho phép tiếp tục đến route
};
  