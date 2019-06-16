export default (str)=>{
    //保存所有符合条件的IP
    let r=[]
    //递归函数
    // cur是处理结果， sub是未处理字符串
    let search=(cur,sub)=>{
        // 当字符串大于12时肯定不能生成一个合法的IP地址
        if (sub.length > 12) {
            return;
        }
        // 当前数组中元素为4且拼接起来恰好需要处理的字符串，则将其加入result数组
        if(cur.length===4 && cur.join('')===str){
            r.push(cur.join('.'))
        }else{
            // 否则，分别取出代码前1、2、3位进行递归处理
            // 由于剩余的字符串长度不一定大于等于3，所以对于长度还需要进行最小值的判断
            for(let i=0,len=Math.min(3,sub.length),tmp;i<len;i++){
                tmp=sub.substr(0,i+1)
                // 若数值大于255，则不可能形成合法IP地址
                if(tmp<256){
                    // 转换下数据类型，如 01为1（LeetCode测试用例）
                    search(cur.concat([tmp * 1]), sub.substr(i + 1))
                }
            }
        }
    }
    search([], str)
    return r
}