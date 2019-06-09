export default (str) => {
    //1.建立电话号码键盘映射
    //2.把输入字符串按单个字符分割变成个数组，234=>[2,3,4]
    //3.保存键盘映射后的字母内容，如 23=>['abc','def']
    let map=['', 1, 'abc', 'def','ghi','jkl','mno','pqrs','tuv','wxyz']
    let num=str.split('')
    let code=[]
    num.forEach(item => {
        if(map[item]){
            code.push(map[item])
        }  
    })


    //边界情况
    if (str == '') return []
    else if (str.length == 1) {
        return code[0].toString().split('')
    } else {

    //函数体
        let comb=(arr)=>{
            //临时变量用来保存前两个字符组合的结果
            let tmp=[]
            //最外层的循环是便利第一个元素，里层的循环是便利第二个元素
            for(let i=0;i<arr[0].length;i++){
                for(let j=0;j<arr[1].length;j++){
                    tmp.push(`${arr[0][i]}${arr[1][j]}`)
                }
            }
            //临时变量替换当前数组的前两个
            arr.splice(0,2,tmp)
            //递归
            if(arr.length>1){
                comb(arr)
            }else{
                return tmp
            }
            //函数体最终会剩下一个元素，即第一个元素
            return arr[0]
        }
        
        //进行调用
        return comb(code)
    }
}