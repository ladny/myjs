export default (arr)=>{
    //冒泡排序
    //控制循环的次数
    for(let i=arr.length-1,tmp;i>0;i--){
        //开始遍历
        for(let j=0;j<i;j++){
            //临时变量
            tmp=arr[j]
            if(tmp>arr[j+1]){
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
    return arr
}

// export default (arr)=>{
//     for(let i=0,len=arr.length;i<len;i++){
//         for(let j=len-1;j>0;j++){
//             if(arr[j]>arr[j-1]){
//                 [arr[j-1],arr[j]]=[arr[j],arr[j-1]]
//             }
//         }
//     }
//     return arr
// }