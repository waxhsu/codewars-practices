/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35) */

function squareDigits(num){
  let numArr =  Array.from(String(num), Number)
  let resultArr = []
  for (let i = 0; i <numArr.length; i++)
     resultArr.push(Math.pow(numArr[i],2))
     return +resultArr.join('')
  
//   let arr = String(num).split('').map((num) => num*num)
//   return Number(arr.join(''))
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////




// https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript

function square(n){
  return n**2
}


//https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript

function problem(x){
  if (typeof x === 'string'){
    return "Error"}
  else 
    return x*50+6
}


// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s){
  let map1 = s.split(" ").map(x => x.length);
  map1.sort((a,b) => a-b)
  return map1[0]
}