import leastInterval from '../../code/queue/lesson2'

test('leastInterval',()=>{
    expect(leastInterval(["A", "A", "A", "B", "B", "B"],2)).toBe(8)
    expect(leastInterval(["A", "A", "A", "A", "B", "B", "B","c","c"], 1)).toBe(9)
    expect(leastInterval(["A", "A", "B", "B", "c", "c", "d", "d"], 2)).toBe(8)
})