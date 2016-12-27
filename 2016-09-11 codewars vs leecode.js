/**
 * Created by xzx on 2016-09-11.
 */
var cache = {};
/**
 * codewars 6kyu
 * https://www.codewars.com/kata/paths-in-the-grid/javascript
 * m*n的矩形，从右上角到左下角，只允许向右或向下移动，求一共有多少条路线。
 * 注意：是点的移动，从(m,n)到(0,0)
 * @param m
 * @param n
 * @returns {*}
 */
const numberOfRoutes = (m, n) =>{
    let a = 0, sumkey = m + '+' + n;
    if (cache[sumkey]) {
        return cache[sumkey];
    }
    if (n == 1 || m == 1) {
        a = m * n + 1;
    }
    else {
        a = numberOfRoutes(m, n - 1) + numberOfRoutes(m - 1, n)
    }
    cache[sumkey] = a
    return a;
}
/**
 * leecode medium
 * https://leetcode.com/problems/unique-paths/
 * m*n的方块矩形，从右上角到左下角，只允许向右或向下移动，求一共有多少条路线。
 * 注意：在方块上移动，从(m,n)到(0,0)
 * @param m
 * @param n
 * @returns {*}
 */
let uniquePaths = (m, n) => {
    let sumkey=m+'-'+n,a;
    if(cache[sumkey]){
        return cache[sumkey];
    }
    if(n==1||m==1){
        a=1
    }
    else{
        a=uniquePaths(m-1,n)+uniquePaths(m,n-1);
    }
    cache[sumkey]=a
    return a;
}