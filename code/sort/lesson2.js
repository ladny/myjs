// export default (arr,k)=>{
//     //降序
//     return arr.sort((a,b)=>b-a)[k-1]
// }

export default (arr,k)=>{
    //数组最大的索引
    let len=arr.length-1
    //遍历k次 len-k
    for(let i=len,tmp;i>len-k;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
    //arr[len+1-k]
    return arr[len-(k-1)]
}