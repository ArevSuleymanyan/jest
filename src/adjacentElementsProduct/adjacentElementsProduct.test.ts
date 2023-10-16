import adjacentElementsProduct from "./adjacentElementsProduct";

test('adjacentElementsProduct test case 1', () => {
 expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21) 
})
test('adjacentElementsProduct test case 2', () => {
 expect(adjacentElementsProduct([-1, -2])).toBe(2) 
})
test('adjacentElementsProduct test case 3', () => {
 expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toBe(6) 
})
test('adjacentElementsProduct test case 4', () => {
 expect(adjacentElementsProduct([1, 2, 3, 0])).toBe(6) 
})
test('adjacentElementsProduct test case 5', () => {
 expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toBe(50) 
})
test('adjacentElementsProduct test case 6', () => {
 expect(adjacentElementsProduct([1, 0, 1, 0, 1000])).toBe(0) 
})