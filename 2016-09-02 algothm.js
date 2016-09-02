
/**
 *  Created by ldn on 16/9/2.
 *  自然数，最后一位数字6移到第一位，移动后数字恰好是原数字的3倍，找到这个数字最少是几位数
 *  6*3,原数字倒数第二位是8
 *  6/3,原数字第一位是2
 *  那么原始数字一定是  20***86  的形式;
 *  新数字为  620***8  的形式,从 68 进行逆向推理, 例子: ****86*3 => ****58 ==>  ***586*3  => ***758,etc;
 *  问题简化为,初值为 [6,8],乘以 3 生成新的位数后向前迭代,直至生成尾部为[0,2]的数组,显然[0,2]可以继续迭代达到另一个[0,2],这里寻找最小的数。
 *  因此考虑第一次即可。
 *
 *  history
 *  第一个版本的代码中,没有考虑当a的值大于10时的情况
 **/
let a = 8, x = [6, 8], addTemp = 0, foreNum = 6, temp, floor = Math.floor;
while (foreNum !== 0 || a !== 2) {
    temp = foreNum;
    foreNum = a;
    a = floor(temp * 3 / 10) + a * 3 % 10 + addTemp;
    if (a >= 10) {
        addTemp = floor(a / 10)
        a = a % 10;
    }
    else {
        addTemp = 0;
    }
    x.push(a)
}