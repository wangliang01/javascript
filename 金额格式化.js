// 方法一
// 

function formatMoneny(value) {

    value = parseFloat(String(value).replace(/[^\d\.-]/g, '')).toFixed(2) + '';

    var left = value.split('.')[0].split('');

    var right = value.split('.')[1];

    var temp = '';

    var len = left.length;
    while (len--) {
    	temp += left[len] + ((len - 1) % 3 == 0 && (len === 0) ? ',' : '');
    }

    return left.join('') + '.' + right;
}
