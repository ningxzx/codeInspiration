/**
 * Created by ldn on 16/9/5.
 */
/**
 * Array(3)  =>  [undefined*3]
 * [...Array(3)] => [undefined,undefined,undefined]
 * Array(3).join('2')=>'22'
 * [...Array(3)].join('2')=>'22'
 * Array(3).map((x,i)=>i)=>[undefined*3];
 * [...Array(3)].map((x,i)=>i)=>[0,1,2] 这正是快速创建自然数列的方法。
 */