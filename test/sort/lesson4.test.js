import sort from '../../code/sort/lesson4'

test("sort",()=>{
    expect(sort([1,2,0])).toBe(3)
})

test("sort", () => {
    expect(sort([1, 2, 3, 4, 5, 6])).toBe(7)
})