// Write a function that returns the sum of two numbers.

export default function add(a: number, b: number):number {
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new Error()
  }
  return a + b
}