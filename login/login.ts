let sign = document.getElementById("but");
let userName = (<HTMLInputElement>document.getElementById("userName")).value;
let passWord = (<HTMLInputElement>document.getElementById("passWord")).value;
sign.onclick = function(){
    if(userName == "admin" && passWord == "111111"){
        alert("登录成功");  
    }else{
        alert("登录失败");
    }
}