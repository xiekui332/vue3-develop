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

//localStorage
export let Storage = {

    get: function (key) {
        let value = localStorage.getItem(key)
        if (value) {
            try {
                let value_json = JSON.parse(value)
                if (typeof value_json === 'object') {
                    return value_json
                } else if (typeof value_json === 'number') {
                    return value_json
                }
            } catch (e) {
                return value
            }
        } else {
            return false
        }
    },

    set:function (key, value) {
        let curTime = new Date().getTime()
        try {
            localStorage.setItem(key,JSON.stringify({
                data:value,
                time:curTime
            }))
        }catch (e) {
            if (this.isQuotaExceeded(e)) {
                console.log('Storage full')
            }
        }
    },

     // 删除
     remove: function (key) {
        localStorage.removeItem(key)
    },

    // 清除
    clear: function () {
        localStorage.clear()
    },

    /**
    * 批量保存，data是一个字典
    */
    setList: function (list) {
        for (let i in list) {
            localStorage.setItem(i, list[i])
        }
    },

    /**
    * 批量删除
    */
    removeList: function (list) {
        for (let i = 0, len = list.length; i < len; i++) {
            localStorage.removeItem(list[i])
        }
    },

    /**
    * 大小限制
    */
   isQuotaExceeded: function (e) {
        let quotaExceeded = false
        if (e) {
            if (e.code) {
                switch (e.code) {
                case 22:
                    quotaExceeded = true
                    break
                case 1014:
                    // Firefox
                    if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                        quotaExceeded = true
                    }
                    break
                }
            } else if (e.number === -2147024882) {
                // Internet Explorer 8
                quotaExceeded = true
            }
        }
        return quotaExceeded
    },


    /**
    * 是否支持localStorage存储
    */
   isSupport: function () {
        if (window.localStorage) {
            console.log('支持')
            return true
        } else {
            console.log('您的浏览器不支持localStorage存储')
            return false
        }
    }

}

export const timeago = post_modified => {
    // 拿到当前时间戳和发布时的时间戳，然后得出时间戳差
    let curTime = new Date()
    let postTime = new Date(post_modified)
    let timeDiff = curTime.getTime() - postTime.getTime()

    // 单位换算
    let min = 60 * 1000
    let hour = min * 60
    let day = hour * 24
    let week = day * 7

    // 计算发布时间距离当前时间的周、天、时、分
    let exceedWeek = Math.floor(timeDiff / week)
    let exceedDay = Math.floor(timeDiff / day)
    let exceedHour = Math.floor(timeDiff / hour)
    let exceedMin = Math.floor(timeDiff / min)
    // 最后判断时间差到底是属于哪个区间，然后return
    if (exceedDay > 1) {
        return formatTime(post_modified)
    } else {
        if (exceedHour < 24 && exceedHour > 0) {
            let today = curTime.getDate()
            let day = postTime.getDate()
            if (today === day) {
                return '今天 ' + postTime.getHours() + ':' + postTime.getMinutes()
            } else {
                return exceedHour + '小时前'
            }
        } else if (exceedMin < 60 && exceedMin > 0) {
            return exceedMin + '分钟前'
        } else {
            return '刚刚'
        }
    }
}