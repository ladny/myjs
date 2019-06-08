export default (str)=>{
    //1.建立数据结构，堆栈，保存数据
    //2.通过for循环控制程序运行的流程
    //3.match是给定任意输入都返回第一个符合条件的字串
    //4.str.slice(i)是从i开始截取字符串，保存结果
    let r=[]
    let match=(str)=>{
        //找连续的0配1
	/*匹配思路：配合正则表达式，JS RegExp(正则对象)以及字符换拼接完成匹配*/
        let j=str.match(/^(0+|1+)/)[0]
        let o=(j[0] ^ 1).toString().repeat(j.length)
        //声明正则对象
        let reg = new RegExp(`^(${j}${o})`)
        if(reg.test(str)){
            return RegExp.$1
        }else{
            return ''
        }
    }
    for (let i=0;i<str.length-1;i++){
        let sub=match(str.slice(i))
        if(sub){
            r.push(sub)
        }
    }
    return r
}

