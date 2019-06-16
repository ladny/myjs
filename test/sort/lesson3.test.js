import sort from '../../code/sort/lesson3'

test('sort:',()=>{
    expect(sort([3, 6, 9, 1])).toBe(3)
})

test('sort:', () => {
    expect(sort([10])).toBe(0)
})

test('sort:', () => {
    expect(sort([13,16,19,1])).toBe(12)
})