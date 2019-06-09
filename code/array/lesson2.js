// export default (arr)=>{
//    //卡牌排序，目的是让相同的牌排在一起，方便分组
//     let str=arr.sort().join('')

//     //分组 (单张或者多张)
//     let group=str.match(/(\d)\1+|\d/g) 
//     //求两个数的最大公约数
//     // let gcd=(a, b)=> {
//     //     if (b == 0) {
//     //         return a
//     //     } else {
//     //         //递归，a取模b
//     //         return gcd(b, a % b)
//     //     }
//     // }

//     const gcd = (a, b) => {
//         return b === 0 ? a : gcd(b, a % b)
//     }

//     //两组间求公约数
//     while(group.length>1){
//         //把当前第一个元素弹出来,
//         let a=group.shift().length
//         let b = group.shift().length
//         //求出两组后，算公约数
//         let v =gcd(a,b)
//         if(v===1){
//             return false
//         }else{
//             //将上次公约数的值v，再放回group中，跟下一个比
//             //只在乎长度即可，跟字符串本身没有关系
//             group.unshift('0'.repeat(v))
//         }
//     }
//     //group为空或1
//     return group.length ? group[0].length>1 : false
// }

export default (arr) => {
    // 存储每张卡牌的总数
    // 修改排序的方式修改为直接统计每个相同字符的数量，思路不变（LeetCode测试用例）
    let group = []
    let tmp = {}
    arr.forEach(item => {
        tmp[item] = tmp[item] ? tmp[item] + 1 : 1
    })
    for (let v of Object.values(tmp)) {
        group.push(v)
    }
    // 此时group已经存放的是每张牌的总数了（数组只遍历一遍，避免了排序和正则的耗时）
    // 求两个数的最大公约数
    let gcd = (a, b) => {
        if (b === 0) {
            return a
        } else {
            return gcd(b, a % b)
        }
    }
    while (group.length > 1) {
        let a = group.shift()
        let b = group.shift()
        let v = gcd(a, b)
        if (v === 1) {
            return false
        } else {
            group.unshift(v)
        }
    }
    return group.length ? group[0] > 1 : false
}