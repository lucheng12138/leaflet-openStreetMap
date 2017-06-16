interface loginInfo {
    loginName: string;
    loginPwd: string;
}

function login(loginInfo: loginInfo) {
    (loginInfo.loginName == "admin" && loginInfo.loginPwd == "123456") ? window.location.href = "file:///D:/demo/hello-typescript/testmap/map.html" : (loginInfo.loginName == "" || loginInfo.loginPwd == "") ? alert("用户名或密码不能为空") : alert("用户名或密码错误");
}

let btn = document.getElementById("btn1");
let click = btn.onclick = () => {
    let loginName = (document.getElementById("userName") as HTMLInputElement).value;
    let loginPwd = (document.getElementById("passWord") as HTMLInputElement).value;
    let loginInfo = { loginName: loginName, loginPwd: loginPwd };
    login(loginInfo);
}

document.onkeydown = (e) => {
    if ((e.keyCode || e.which) == 13) {
        click();
    }
}

// class Login {
//     loginName: string;
//     loginPwd: string;
//     constructor(message: string, information: string) {
//         this.loginName = message;
//         this.loginPwd = information;
//     }
//     logining() {
//         (this.loginName == "admin" && this.loginPwd == "123456") ? window.location.href = "file:///D:/demo/hello-typescript/testmap/map.html" : (this.loginName == "" || this.loginPwd == "") ? alert("用户名或密码不能为空") : alert("用户名或密码错误");
//     }
// }

// let btn = document.getElementById("btn1");

// let click2 = btn.onclick = () => {
//     let loginName = (document.getElementById("userName") as HTMLInputElement).value;
//     let loginPwd = (document.getElementById("passWord") as HTMLInputElement).value;
//     let login = new Login(loginName, loginPwd);
// }
