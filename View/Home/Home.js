document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault();
    // Chuyển đến giao diện đăng ký
    // Có thể sử dụng location.href hoặc một hàm hiển thị giao diện đăng ký
    alert("Chuyển đến giao diện đăng ký!");
});

document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();
    // Chuyển đến giao diện đăng nhập
    // Có thể sử dụng location.href hoặc một hàm hiển thị giao diện đăng nhập
    alert("Chuyển đến giao diện đăng nhập!");
});
document.getElementById('logo').addEventListener('click', function() {
    window.location.href = 'Home.html'; 
});
