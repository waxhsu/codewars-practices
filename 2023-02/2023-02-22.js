/* Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4) */

//my answer
const sequenceSum1 = (begin, end, step) => {
    let result = 0
    if (begin > end){
      return 0
    } else if (end > begin) {
      for (let i = begin; i<end; i++)
      return result = begin + step // idk how to make it loop to stop at end
    } 
  }

//ANSWER
const sequenceSum2 = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum2(begin + step, end, step);
  };

  // sequenceSum??? wtf 


//////////////////////////////////////////
//////////////////////////////////////////




/* https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript */

function comp(array1, array2){
  //your code here
}


/// this is my answer, it is wrong
function comp(array1, array2){
  if (array1 == null || array2 == null) return false
  let array3 = []
  array1.sort((a,b) => a-b)
  array2.sort((c,d) => c-d)
  for (let i = 0; i<array1.length; i++)
    array3.push(array1[i]**2)
  // console.log(array3)
  // console.log(array2)
  if (array3 === array2){
      return true
    } else {
      return false
  }     
}

/// CORRECT SOLUTION
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

// WHAT THE FUCK IS .every?!?!?




