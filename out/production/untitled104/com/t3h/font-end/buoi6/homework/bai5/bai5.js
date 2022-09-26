function validate(){
    var username = document.getElementById("username").value;

    if(username.length < 5){
        alert("Tên đăng nhập không hợp lệ!")
        return;
    }

    var pass = document.getElementById("pass").value;

    if(pass.length < 8){
        alert("Mật khẩu nhập không hợp lệ!")
        return;
    }

    var passRetype = document.getElementById("passRetype").value;

    if(passRetype.length <8 || passRetype !== pass){
        alert("Mật khẩu nhạp lại phải trùng với mật khẩu đã nhập!")
        return;
    }

    var phone = document.getElementById("phoneEdit").value;

    if(isNaN(phone) || phone.length === 10){
        alert("Số điện thoại phải là dạng số và là 10 ký tự")
        return;
    }

    var inputEmail = document.getElementById("inputEmail").value;

    if(inputEmail.length < 1){
        alert("Địa chỉ email không được để trống")
        return;
    }

    document.getElementById("info").style.display = "block";

    document.getElementById("usernameP").value = username;
    document.getElementById("passP").value = pass;
    document.getElementById("passRetypeP").value = passRetype;
    document.getElementById("phoneEditP").value = phone;
    document.getElementById("inputEmailP").value = inputEmail;



}
