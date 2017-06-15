var sign = $("#but");
var userName = $("#userName").text();
var passWord = $("#passWord").text();

sign.click(function () {
    if (userName == "admin" && passWord == "111111") {
        alert("登录成功");
    }
    else {
        alert("登录失败");
    }
});
