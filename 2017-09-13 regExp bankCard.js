// 正则表达式格式化银行卡
// 先分块后替换
'123123412341234'.replace(/((^\d{3})|\d{4})(?=\d)/g,'$1 ').replace(/\d(?=(\d*\ |\ ))/g,'*')
 "*** **** **** 1234"