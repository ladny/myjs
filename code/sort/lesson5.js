// export default (arr)=>{
//     let quickSort=(arr)=>{
//         let len=arr.length
//         if(len<2){
//             return arr
//         }else{
//             //选标尺元素
//             let flag=arr[0]
//             let left=[]
//             let right=[]
//             //把剩余的元素遍历下，比标尺元素小的放左边，大的放右边
//             for(let i=1,tmp;i<len;i++){
//                 tmp=arr[i]
//                 if(tmp<flag){
//                     left.push(tmp)
//                 }else{
//                     right.push(tmp)
//                 }
//             }
//             //进行递归操作
//             return quickSort(left).concat(flag, quickSort(right))
//         }
//     }
//     return quickSort(arr)
// }


//划分交换
export default (arr) => {
    //数组两个位置进行值交换
    let swap=(arr,i,j)=>{
        let tmp=arr[i]
        arr[i]=arr[j]
        arr[j]=tmp
    }
    //完成一次划分交换，找出排序后 标尺在数组的角标
    let findCenter=(arr,left,right)=>{
        let flag=arr[left]
        let idx=left+1
        for (let i = idx; i <= right; i++) {
            if(arr[i]<flag){
                swap(arr,idx,i)
                idx++
            }
        }
        swap(arr,left,idx-1)
        return idx
    }
    //递归排序
    let sort=(arr,left,right)=>{
        if(left<right){
            let center=findCenter(arr,left,right)
            sort(arr,left,center-1)
            sort(arr,center,right)
        }
    }
    sort(arr,0,arr.length-1)
    return arr
}