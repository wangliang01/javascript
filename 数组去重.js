/*
方法一
思路： 吃回转寿思，对老数组进行遍历，与新数组中的每一项进行对比
 */
function uniqeArray(arr) {
    if (typeof arr === 'object' && arr instanceof Array) {
        var brr = [];
        for (var i = 0; i < arr.length; i++) {
            var flag = true;
            for (var k = 0; k < brr.length; k++) {
                if (arr[i] === brr[k]) {
                    flag = false;
                }
            }
            if (flag) {
                brr.push(arr[i]);
            }
        }
        return brr;
    }
}

/*方法二*/
function uniqeArray(arr) {
    if (typeof arr === 'object' && arr instanceof Array) {
        var brr = [];
        for (var i = 0; i < arr.length; i++) {
            var flag = true;
            for (var k = i + 1; k < arr.length; k++) {
                if (arr[i] === arr[k]) {
                    flag = false;
                }
            }
            if (flag) {
                brr.push(arr[i]);
            }
        }
        return brr;
    }
}

/*方法三*/
function uniqeArray(arr) {
    if (typeof arr === 'object' && arr instanceof Array) {
        var brr = [];
        for (var i = 0; i < arr.length; i++) {
            for (var k = i + 1; k < arr.length; k++) {
                if (arr[i] === arr[k]) {
                    k = ++i;
                }
            }
            brr.push(arr[i]);
        }
        return brr;
    }
}

/*方法四*/
function uniqeArray(arr) {
    if (typeof arr === 'object' && arr instanceof Array) {
        for (var i = 0; i < arr.length; i++) {
            for (var k = i + 1; k < arr.length; k++) {
                if (arr[i] === arr[k]) {
                    arr.splice(k, 1);
                    // k--;
                }
            }
        }
        return arr;
    }
}

/*对象法*/
/*方法五*/
function uniqeArray(arr) {
    if (typeof arr === 'object' && arr instanceof Array) {
        var brr = [],
            obj = {};
        for (var i = 0; i < arr.length; i++) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = true;
            }
        }
        for(var pro in obj){
        	brr.push(pro)
        }
        return brr;
    }
}
/*排序法*/
// 思路:先排序，拿每一项与后一项比较，相同时，删除后一项
/*方法六*/
// es5  indexOf()  forEach()
// 方法七
function uniqeArray(arr) {
    if (typeof arr === 'object' && arr instanceof Array) {
        var brr = [];
        arr.forEach(function(item, index, array) {
            if (brr.indexOf(item) === -1) {
                brr.push(item)
            }
        });
        return brr;
    }
}

/*方法八*/
function uniqeArray(arr) {
    if (typeof arr === 'object' && arr instanceof Array) {
        var brr = [];
        arr.forEach(function(item, index, array) {
            if (arr.indexOf(item, index + 1) === -1) {
                brr.push(item)
            }
        });
        return brr;
    }
}

/*方法九*/
function uniqeArray(arr) {
    if (typeof arr === 'object' && arr instanceof Array) {
        arr.forEach(function(item, index, array) {
            if (arr.indexOf(item, index + 1) !== -1) {
                arr.splice(index, 1);
            }
        });
        return arr;
    }
}

/*方法十*/
// ES6 Set对象  长度 size
function uniquArray(arr) {
    return Array.from(new Set(arr))

}


/*方法十一*/
// ... 扩展运算符
function uniquArray() {
    return ...new Set(arr);
}
