import centuryFromYear from "./centuryFromYear";

test('The year 1905 is in the 20th century.', () => {
  expect(centuryFromYear(1905)).toBe(20)
})

test('The year 1700 is in the 17th century.', () => {
  expect(centuryFromYear(1700)).toBe(17)
})

test('The year 1988 is in the 20th century.', () => {
  expect(centuryFromYear(1988)).toBe(20)
})

test('The year 2000 is in the 20th century.', () => {
  expect(centuryFromYear(2000)).toBe(20)
})

test('The year 200 is in the 2th century.', () => {
  expect(centuryFromYear(200)).toBe(2)
})

test('The year 374 is in the 4th century.', () => {
  expect(centuryFromYear(374)).toBe(4)
})

test('The year 0 is in the 1st century.', () => {
  expect(centuryFromYear(0)).toBe(1);
});

test('The year -100 is an invalid year.', () => {
  expect(() => centuryFromYear(-100)).toThrowError();
});

test('The year "2000" (string) is an invalid year.', () => {
  expect(() => centuryFromYear("2000" as any)).toThrowError();
});

test('The year 5000 is in the 50th century.', () => {
  expect(centuryFromYear(5000)).toBe(50);
});