/**
 * Created by xzx on 2016-10-26.
 */
/**
 * 寻找字符串中第一个不重复的字符。
 * my solution
 * @param s
 * @returns {string}
 */
function firstNonRepeatingLetter(s) {
    var index=0,l=s.length,ans="";
    for(;index<l;index++){
        let a=s.slice(index+1).toLowerCase(),
            c=s.slice(0,index).toLowerCase(),
            b=s[index].toLowerCase();
        if(a.indexOf(b)===-1&&c.indexOf(b)===-1){
            ans=s[index];
            break;
        }
    }
    return ans;
}
/**
 * best solution
 * @param s
 * @returns {*}
 */
function firstNonRepeatingLetter(s) {
    for(var i in s) {
        if(s.match(new RegExp(s[i],"gi")).length === 1) {
            return s[i];
        }
    }
    return '';
}

/**
 * 字符串循环匹配，正则最简洁，正则其实也就是将字符串转为数组并进行验证的过程。
 **/