import checkPalindrome from "./checkPalindrome";

test('checkPalindrome: aabaa: true', () => {
  expect(checkPalindrome('aabaa')).toBe(true)
})

test('checkPalindrome: abac: false', () => {
  expect(checkPalindrome('abac')).toBe(false)
})

test('checkPalindrome: a: true', () => {
  expect(checkPalindrome('a')).toBe(true)
})

test('checkPalindrome: ``: true', () => {
  expect(checkPalindrome('')).toBe(true)
})

test('checkPalindrome: az: false', () => {
  expect(checkPalindrome('az')).toBe(false)
})

test('checkPalindrome: abacaba: true', () => {
  expect(checkPalindrome('abacaba')).toBe(true)
})

test('checkPalindrome: aaabaaaa: false', () => {
  expect(checkPalindrome('aaabaaaa')).toBe(false)
})

test('checkPalindrome: hlbeeykoqqqokyeeblh: true', () => {
  expect(checkPalindrome('hlbeeykoqqqokyeeblh')).toBe(true)
})