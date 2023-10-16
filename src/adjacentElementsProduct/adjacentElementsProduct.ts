//Given an array of integers, find the pair of adjacent 
//elements that has the largest product and return that product.

export default function adjacentElementsProduct(arr: number[]): number{
  let max = arr[0] * arr[1] ;
  for(let i = 0 ;i < arr.length-1 ; i++ ){
      max = max > arr[i] * arr[i+1] ? max: arr[i] * arr[i+1];
  }
  return max;
}

