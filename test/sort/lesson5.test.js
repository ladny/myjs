import sort from '../../code/sort/lesson5'


test("sort",()=>{
    expect(sort([1,2,0])).toEqual([0,1,2])
    expect(sort([5,4,1, 2, 0])).toEqual([0, 1, 2,4,5])
})