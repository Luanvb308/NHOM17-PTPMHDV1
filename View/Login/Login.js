const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});
// Lấy các phần tử từ DOM
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

// Xử lý sự kiện gửi form Đăng Ký
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định
    alert("Đăng ký thành công!"); // Hiển thị thông báo thành công
});

// Xử lý sự kiện gửi form Đăng Nhập
signInForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định
    alert("Đăng nhập thành công!"); // Hiển thị thông báo thành công
});