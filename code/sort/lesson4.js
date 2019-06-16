// export default (arr)=>{
//     //过滤非正整数
//     arr=arr.filter(item=>item>0)
//     //排序正整数
//     //判断是否为空，空则返回1
//     if(arr.length){
//         //升序：方便从左到右取最小值arr[0]
//         arr.sort((a,b)=>a-b)
//         //如果第一个元素不为1，返回1
//         if (arr[0] != 1) {
//             return 1
//         }else{
//             //从左到右遍历，只要下一个元素和当前元素差值大于1,说明当前元素的下一个值（+1）是返回值
//             for(let i=0,len=arr.length-1;i<len;i++)
//                 if(arr[i+1]-arr[i]>1){
//                     return arr[i]+1
//             }
//             //未找到时，则取数组的最后一个元素+1
//             return arr.pop()+1
//         }
//     }else{
//         return 1
//     } 
// }


export default (arr)=>{
    arr=arr.filter(item=>item>0)
    //实现选择排序，先拿到最小值，如果第一个元素不是1直接返回1，
    //如果是1，就要比相邻元素差值
    if(arr.length){
        for(let i=0,len=arr.length,min;i<len;i++){
            min=arr[i]
            for(let j=i+1;j<len;j++){
                if(arr[j]<min){
                    let c=min
                    min = arr[j]  
                    arr[j]=c 
                }
            }
            //记录当前的最小值
            arr[i]=min
            //遍历了两次
            if(i>0){
                if(arr[i]-arr[i-1]>1){
                    return arr[i-1]+1
                }
            }else{
                //只进行了第一次遍历
                if(min!==1){
                    return 1
                }
            }
        }
    }
    return arr.length ? arr.pop()+1 : 1   

}