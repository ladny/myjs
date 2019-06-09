export default (n) =>{
    //递归函数，用来算输入为n的格雷编码序列
    let make=(n)=>{
        if(n===1){
            return ['0','1']
        }else{
            let prev=make(n-1)
            let result=[]
            //输出的长度为2的n次方-1
            let max = Math.pow(2,n)-1
            for(let i=0;i<prev.length;i++){
                result[i]=`0${prev[i]}`
                result[max-i]=`1${prev[i]}`
            }
            //二进制转十进制
            let aa=[]
            result.forEach(item => {
                aa.push(parseInt(item, 2))
                });
            return aa      
        }
    }
    return make(n)
}