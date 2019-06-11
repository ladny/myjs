import grayCode from '../../code/array/lesson4'


// test('grayCode:1',()=>{
//     expect(grayCode(2)).toEqual(['00','01','11','10'])
// })
test('grayCode:1', () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2])
})