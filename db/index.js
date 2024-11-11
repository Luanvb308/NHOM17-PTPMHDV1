
// const mongoose = require('mongoose');

// async function connect() {
//     try {
//         // Đảm bảo rằng bạn đã mã hóa mật khẩu nếu có ký tự đặc biệt
//         const uri = 'mongodb+srv://nguyenvanluan2004vb:12346@cluster0.mmmh3.mongodb.net/VNBSPORT';
//         await mongoose.connect(uri, {
//         });
//         console.log("Kết nối thành công!!");
//     } catch (error) {
//         console.log("Lỗi khi kết nối:", error);
//     }
// }

// module.exports = { connect };
const mongoose = require('mongoose');

async function connect() {
    try {
        // Đảm bảo rằng bạn đã mã hóa mật khẩu nếu có ký tự đặc biệt
        const uri = 'mongodb+srv://nguyenvanluan2004vb:12346@cluster0.mmmh3.mongodb.net/VNBSPORT';
        
        // Kết nối tới MongoDB Atlas với các tùy chọn cần thiết
        await mongoose.connect(uri, {
        });
        
        console.log("Kết nối MongoDB thành công!");
    } catch (error) {
        console.error("Lỗi khi kết nối MongoDB:", error);
        process.exit(1); // Dừng ứng dụng nếu không thể kết nối
    }
}

module.exports = { connect };
