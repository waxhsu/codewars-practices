/* https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript */

function comp(array1, array2){
    //your code here
  }



  function comp(array1, array2){
    if (array1 == null || array2 == null){
      return false
    } else {
      console.log(array1.sort((a,b) => a-b))
      console.log(array2.sort((c,d) => c-d))
      for (let i = 0; i<array1.length; i++)
      for (let i = 0; i<array2.length; i++)
      if (Math.pow(array1[i],2) == array2[i]){
        return true
      } else {
        return false
      }   
    }
  }

  



