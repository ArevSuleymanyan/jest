//Given the string, check if it is a palindrome.

export default function checkPalindrome(value: string): boolean {
  let reverseValue = value.split('').reverse().join('');
  return reverseValue === value ? true : false
}