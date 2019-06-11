export default (arr)=>{
    //选择排序
    for(let i=0,len=arr.length,min;i<len;i++){
        //min最小值 
        min=arr[i] //记录当前最小值
        for(let j=i+1;j<len;j++){
            if(arr[j]<min){
                let c=min;
                min=arr[j];
                arr[j]=c;
            }
        }
        arr[i]=min //保证最小值赋值给i的位置
    }
    return arr
}