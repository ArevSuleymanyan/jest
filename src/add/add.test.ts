import add from './add';

test('Adding 2 + 3 should equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('Adding 0 + 0 should equal 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('Adding -2 + 2 should equal 0', () => {
  expect(add(-2, 2)).toBe(0);
});

test('Adding -5 + 5 should equal 0', () => {
  expect(add(-5, 5)).toBe(0);
});

test('Adding 100 + 200 should equal 300', () => {
  expect(add(100, 200)).toBe(300);
});

test('Adding 1.5 + 2.5 should equal 4', () => {
  expect(add(1.5, 2.5)).toBe(4);
});

test('Adding "2" + 3 should throw an error', () => {
  expect(() => add("2" as any, 3)).toThrowError();
});

test('Adding 2 + "3" should throw an error', () => {
  expect(() => add(2, "3" as any)).toThrowError();
});

test('Adding "a" + "b" should throw an error', () => {
  expect(() => add("a" as any, "b" as any)).toThrowError();
});
