// Below we will define an n-interesting polygon. 
// Your task is to find the area of a polygon for a given n.            
//                   |X|
//        |X|      |X X X|
// |X|  |X X X|  |X X X X X|
//       |X|      |X X X|
//                 |X|

export default function shapeArea(n:number):number {
  if(n < 0){
    throw new Error()
  }
  return Math.pow(n, 2) + Math.pow((n-1), 2)
}