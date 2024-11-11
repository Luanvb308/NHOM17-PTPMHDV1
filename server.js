const express = require('express');
const app = express();
app.use(express.static('public'));
const db = require('./db');
const homeRouter = require('./routes/index');
var signupRouter = require("./routes/signup");
// const HomeController = require('./src/controller/HomeController');

app.set('view engine', 'ejs');
app.set('views', './views');  // Đảm bảo đường dẫn đúng đến thư mục views

// Middleware để phân tích dữ liệu POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Cấu hình body-parser để xử lý dữ liệu form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Kết nối đến cơ sở dữ liệu
db.connect();
// Sử dụng các route
app.use('/signup', signupRoutes);

// Routes
app.use('/', homeRouter);
app.use('/signup', signupRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
