const express = require('express');
const bodyParser = require('body-parser'); // Khai báo body-parser
const session = require('express-session');
const productRouter = require('./routes/productRouter');
const app = express();
const path = require('path');
app.use(express.static('public'));
const {connect} = require('./db/index');
const homeRouter = require('./routes/index');
const logoutRouter = require('./routes/logout');
var loginRouter = require("./routes/login");
var signupRouter = require("./routes/signup");
// const HomeController = require('./src/controller/HomeController');

// Cấu hình express-session
app.use(session({
  secret: 'your-secret-key',  // Thay 'your-secret-key' bằng một chuỗi bí mật
  resave: false,              // Không lưu lại session nếu không thay đổi
  saveUninitialized: true,    // Lưu session khi chưa khởi tạo
  cookie: { secure: false }   // Nếu bạn sử dụng HTTPS, set 'secure: true'
}));
// Cấu hình thư mục chứa views
app.set('views', path.join(__dirname, 'views'));

// Sử dụng EJS làm template engine
app.set('view engine', 'ejs');

app.set('view engine', 'ejs');
app.set('views', './views');  // Đảm bảo đường dẫn đúng đến thư mục views

// Middleware để phân tích dữ liệu POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sử dụng body-parser để phân tích body của request
app.use(bodyParser.json());  // Để xử lý các request có body là JSON
app.use(bodyParser.urlencoded({ extended: true }));  // Để xử lý các form-urlencoded data
// Cấu hình body-parser để xử lý dữ liệu form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Kết nối đến cơ sở dữ liệu
connect();
// Routes
app.use('/', homeRouter);
app.use('/login', loginRouter)
app.use('/signup', signupRouter);
app.use('/product',productRouter);
app.use('/logout',logoutRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
