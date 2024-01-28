const password = document.getAnimations('password').value;
const rePassword = document.getElementById('re-password').value;

// validate

const newUser = {
    name: name,
    email: email,
    password: password,
    rePassword: rePassword,
};

let isExistEmail = false;

    for (let user of listUser) {
        if (user.email === email) {
        alert('Email đã tồn tại');
        isExistEmail = true;
        }
    }
    if (isExistEmail === false) {
       listUser.push(newUser);
       localStorage.setItem('users', JSON.stringify(listUser));
       alert('Đăng ký thành công');
    }
    if (name.length <=2) {
       alert("Tên dài hơn 2 kí tự ");
       return;
    }
    if (!/\w+@\+w+\.[a-z]+/.test(email)){
       alert("Email không đúng định dạng.");
       return;
    }
    if (password.length = 6){
        alert("Mật khẩu phái chứ 6 kí tự " );
        return;
    }
});