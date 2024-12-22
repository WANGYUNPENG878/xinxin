document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.innerText = ''; // 清空错误信息  

    // 简单的验证  
    if (!username || !password) {
        errorMessage.innerText = '用户名和密码不能为空！';
        return;
    }

    // 模拟登录逻辑  
    if (username === 'admin' && password === '123456') {
        alert('登录成功！');
        // 在这里添加跳转或其他处理逻辑，例如：window.location.href = 'homepage.html';  
    } else {
        errorMessage.innerText = '用户名或密码错误！';
    }
});