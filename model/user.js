const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');  // Cần cài đặt bcryptjs nếu chưa có
const Schema = mongoose.Schema;

// Định nghĩa UserSchema
const UserSchema = new Schema(
  {
    email: { 
      type: String, 
      required: true, 
      maxLength: 255, 
      unique: true  // Đảm bảo email là duy nhất trong cơ sở dữ liệu
    },
    pass: { 
      type: String, 
      required: true, 
      maxLength: 255 
    },
    name: { 
      type: String, 
      required: true, 
      maxLength: 255
    },
  },
  {
    collection: "User",  // Chỉ định tên collection trong MongoDB
    timestamps: true  // Tự động tạo các trường createdAt và updatedAt
  }
);

// Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
UserSchema.pre('save', async function(next) {
  if (this.isModified('pass') || this.isNew) {
    try {
      // Mã hóa mật khẩu với bcrypt
      const salt = await bcrypt.genSalt(10);
      this.pass = await bcrypt.hash(this.pass, salt);
      next();
    } catch (error) {
      next(error);  // Xử lý lỗi nếu có
    }
  } else {
    next();
  }
});

// Phương thức để so sánh mật khẩu khi đăng nhập
UserSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.pass);
};

module.exports = mongoose.model('User', UserSchema);
