/* to remember
1、所有有length属性（iterator接口）的变量都可以通过扩展运算符转为数组。
2、数组 + "" 等同于toString()方法。
3、String的includes方法接受两个参数，第一个为目标字符串，第二个为查找的起始位置，默认为0。如果当前（this）调用方法的字符串在指定位置之后包含目标字符串，则返回true，否则返回false。
4、三元运算符优先级仅高于赋值及逗号运算符
*/

/* detail */
Christmas is coming soon. As a programmer, you need to complete a series of tasks to welcome the arrival of Christmas. This time your task is:

Given two string s1 and s2. You need to perform the following operations: Compare each character of s2 with s1. If s1 contains the character, remove it; If not, append it to s1. After these remove or append operations, if the characters of s1 are same as "Merry Christmas!"(order can be different), return true; Otherwise, return false. For example:

	var s1="abcMerry Christmas!",s2="abc"
	merryChristmas(s1,s2) === true

	var s1="abcerry hristmas!",s2="abcMC"
	merryChristmas(s1,s2) === true

	var s1="abcMerry Christmas!",s2="bad"
	merryChristmas(s1,s2) === false

//包含了数组的查找，添加，删除，比较这几个操作

/*  my solution */
function merryChristmas(s1,s2){
    var arr1=s1.split(''),arr2=s2.split('');
    arr2.forEach(x=>{
      var i=arr1.indexOf(x);
      if(i===-1){
        arr1.push(x)
      }
      else{
        arr1.splice(i,1)
      }
    })
    return arr1.sort().toString()== "Merry Christmas!".split('').sort().toString()
}

/* best solution(in my concern) */
function merryChristmas(s1,s2){
  [...s2].forEach(c => s1 = s1.includes(c) ? s1.replace(c,"") : s1+c );
  return [...s1].sort()+''==[..."Merry Christmas!"].sort()+''
}

/* comparison */
1.using rest operator equals splitting a string;
2.includes methods;
3.plus ""  equals  toString method.
4.the replace() method is elegent than splice() method.
