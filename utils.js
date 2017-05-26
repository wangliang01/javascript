/**
 * 解析url参数
 * @param()
 * return     {Object} { key: value }
 */
function parseUrl() {
    var ret = {};
    // 得到查询字符串 例如："?tn=monline_3_dg&ie=utf-8&wd=sublime+api注释+插件"
    var url = decodeURIComponent(window.location.search);

    // 将查询字符串的第一个？去掉 "tn=monline_3_dg&ie=utf-8&wd=sublime+api注释+插件"
    url = url.substring(1);

    // 将查询字符串分割成数组以&作为分割符  [ "tn=monline_3_dg", "ie=utf-8", "wd=sublime+api注释+插件" ]
    var urlArray = url.split('&');

    // 上面三步可合成一步
    // var urlArray = decodeURIComponent(window.location.search.replace('/^\?/','').split('&'))
    // 遍历数组
    urlArray.forEach(function(item, index) {
        // 将每一项也用=分割成数组
        var tempArray = item.split('=');
        var key = tempArray[0];
        var value = tempArray[1];
        ret[key] = value;
    });

    return ret;
}

/**
 * 字符串的反转
 * return     {String} { 反转后的字符串 }
 * example    { 'abcd' => 'dcba'  }
 */
if (typeof String.prototype.reverse === 'undefined') {
    String.prototype.reverse = function() {
        return this.split('').reverse().join('');
    }
}

/**
 *  得到对应的星期
 *
 * @return     {string}  The week.
 */
function getWeek() {
    return '今天是星期' + '日一二三四五六'.charAt(new Date().getDay());
}

/**
 * 随机获取一个字符串
 *
 * @return     {<String>}  
 */
function getRandomString() {
    return Math.random().toString(36).replace(/\./g, '');
}

/**
 *  大小写相互转化
 *
 * @param      {string}  str     The string
 * @return     {string}  { description_of_the_return_value }
 */
function interconversion(str) {
    var ret = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) < 97) {
            ret += str[i].toLowerCase();
        } else {
            ret += str[i].toUpperCase();
        }
    }
    return ret;
}

/**
 * 随机获取一个颜色值
 *
 * @return     {string}  The random color.
 */
function getRandomColor() {
    return '#' + ('00000' + (Math.random() * 16777215 + 0.5) >> 0).toString(16).splice(-6);
}

/**
 * 金额格式化
 * 2000  =>   2,000.00
 * @param      {(Function|string)}  value   The value
 * @return     {<type>}             { description_of_the_return_value }
 */
function formatMoney(value) {
    value = parseFloat((value + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";

    var left = value.split(".")[0].split("").reverse();

    var right = value.split(".")[1];

    var temp = '';

    for (var i = 0; i < left.length; i++) {
        temp += left[i] + ((i + 1) % 3 == 0 && (i + 1) != left.length ? ',' : "");
    }

    return temp.split('').reverse().join('') + '.' + right;

}
