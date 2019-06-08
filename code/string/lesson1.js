// export default (str)=>{
//     //字符串按空格进行分隔，保存数组
//     let arr = str.split(' ')
//     //map对a数组进行遍历，对每个元素进行反转操作，返回生成一个新的数组
//     let result = arr.map(item=>{
//         //字符串分隔成数组，反转，再拼成字符串
//         return item.split('').reverse().join('')
//     })
//     return result.join(' ')
// }

export default (str) => {
    //1、字符串按空格进行分隔，保存数组
    //2、map对a数组进行遍历，对每个元素进行反转操作，返回生成一个新的数组
    return str.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}

// export default (str) => {
//     //正则方法
//     return str.match(/[\w']+/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }