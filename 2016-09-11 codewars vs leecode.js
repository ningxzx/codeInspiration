/**
 * Created by xzx on 2016-09-11.
 */
var cache = {};
/**
 * m*n的矩形，从右上角到
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

