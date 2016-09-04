/**
 * Created by Xzx on 16/9/4.
 * 7kyu的题,替换名字的中间
 * 错误原因是。。length写成了legth
 */
const initializeNames = n => n.split(' ').map((a, i, arr) => {
    let l = arr.length;
    return (i > 0 && i < l - 1) ? (a[0].toUpperCase() + '.') : a
}).join(' ')
