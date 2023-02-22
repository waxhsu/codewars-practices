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




