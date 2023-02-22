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




