import shapeArea from "./shapeArea";

test('test case 1', () => {
  expect(shapeArea(1)).toBe(1)
})

test('test case 2', () => {
  expect(shapeArea(2)).toBe(5)
})

test('test case 3', () => {
  expect(shapeArea(3)).toBe(13)
})

test('test case 4', () => {
  expect(shapeArea(5)).toBe(41)
})

test('test case 5', () => {
  expect(shapeArea(7000)).toBe(97986001)
})

test('test case 6', () => {
  expect(shapeArea(8000)).toBe(127984001)
})

test('test case 7', () => {
  expect(() => shapeArea(-1)).toThrowError();
})

