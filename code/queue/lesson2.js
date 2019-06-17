export default (tasks,n)=>{
    //任务最终执行的顺序
    let q=''
    //描述任务集合，用作任务分类
    let Q={}
    tasks.forEach(item => {
        if(Q[item]){
            Q[item]++
        }else{
            Q[item]=1
        }
    })
    while(1){
        let keys=Object.keys(Q)
        if(!keys[0]){
            break
        }
        //n+1为一组
        let tmp=[]
        for(let i=0;i<=n;i++){
            let max=0
            let key
            let pos
            //从所有的任务中找到未处理数最大的优先安排
            keys.forEach((item,idx)=>{
                if(Q[item]>max){
                    max=Q[item]
                    key=item
                    pos=idx
                }
            })
            if(key){
                tmp.push(key)
                keys.splice(pos,1)
                Q[key]--
                if(Q[key]<1){
                    delete Q[key]
                }
            }else{
                break
            }
        }
        q+=tmp.join('').padEnd(n+1,'-')
    }
    //A--A--A--  利用正则删除最后两个--
    q=q.replace(/-+$/g,'')
    return q.length

}

// export default (tasks, n) => {
//     // 存储CPU执行的任务
//     let q = []
//     // 给定任务列表的长度
//     let len = tasks.length
//     // 按照相同任务重复次数最多的降序排列
//     tasks = tasks.sort().join('').match(/(\w)\1+|\w/g).sort((a, b) => b.length - a.length).join('').split('')
//     while (len > 0) {
//         if (!q.length) {
//             q.push(tasks.shift())
//             len--
//         } else {
//             let slice = q.slice(-n)
//             let is = -1
//             for (let i = 0, l = tasks.length; i < l; i++) {
//                 if (!slice.includes(tasks[i])) {
//                     q.push(tasks[i])
//                     is = i
//                     break
//                 }
//             }
//             if (is !== -1) {
//                 tasks.splice(is, 1)
//                 len--
//             } else {
//                 q.push('-')
//             }
//         }
//     }
//     return q.length
// }