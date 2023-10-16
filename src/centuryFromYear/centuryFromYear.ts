// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100,
//  the second - from the year 101 up to and including the year 200, etc.


export default function centuryFromYear(year: number): number{
  if(year < 0){
    throw new Error()
  }
  if(typeof year !== 'number'){
    throw new Error()
  }
  if (year === 0) {
    return 1;
  }
  return Math.ceil(year / 100);
}