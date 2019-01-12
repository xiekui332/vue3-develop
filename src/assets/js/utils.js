//px ==> rem
if (window.screen.availWidth <= 750) {
    document.documentElement.style.fontSize = (100 / 750 * window.screen.availWidth) + 'px';
} else {
    document.documentElement.style.fontSize = '100px';
}


// 一位数组转二维数组
function changeArr(n, array) {
    var num = n;//每个子数组里的元素个数
    var arr = array;
    var Arr = new Array(Math.ceil(arr.length / num));
    for (var i = 0; i < Arr.length; i++) {
        Arr[i] = new Array();
        for (var j = 0; j < num; j++) {
            Arr[i][j] = '';
        }
    }
    for (var i = 0; i < arr.length; i++) {
        Arr[parseInt(i / num)][i % num] = arr[i];
    }

    return Arr
}


//解析url
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}


//转化个位数
function tranformTow(number) {
    return number < 10 ? '0' + number : number
}

//消息提示
function myFunction(name, txt) {
    var x = document.getElementById(name)
    x.className = "show";
    x.innerHTML = txt;
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

}