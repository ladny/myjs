import telComb from '../../code/array/lesson1'

test('telComb:23',()=>{
    expect(telComb('23')).toEqual(['ad','ae','af','bd','be','bf','cd','ce','cf'])
})

//如果是值相等用tobe，如果是引用内容相同就用toequal，比如数组