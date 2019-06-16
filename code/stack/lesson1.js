export default (arr) => {
    //用数组实现堆栈结构
    let result = []
    //上一轮的数据
    let pre1
    //上上轮的数据
    let pre2
    //对数组进行遍历，处理得分
    arr.forEach(item => {
        switch (item) {
            case 'C':
                if (arr.length) {
                    result.pop()
                }
                break
            case 'D':
                if (arr.length) {
                    pre1 = result.pop()
                    result.push(pre1, pre1 * 2)
                }
                break
            case '+':
                pre1 = result.pop()
                pre2 = result.pop()
                result.push(pre2, pre1, pre2 + pre1)
                break
            default:
                result.push(item * 1)
        }
    })
    //reduce求和 total是遍历的临时保存结果  num是当前的遍历的值
    return result.reduce((total, num) => {
        return total + num
    })
}