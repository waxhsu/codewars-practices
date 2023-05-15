//https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript

function mergeStrings(first, second){
    // Your solution
  }

// MY ANSWER
  function mergeStrings(first, second){
    let newStr = []
    newStr.push(first)
    for (let i = 0; i<newStr.length; i++)
      if (newStr[1+i] !== second[i]){
        newStr.push(second[i])
      }
    return newStr.join('')
  }
// idk how to make it skip and loop again if a logic is true  

//SOLUTION
function mergeStrings(first, second){
    let count = 0;
    
    for (let i = 0; i < first.length; i++) {
      if (first[i] == second[count]) {
        count++;
      } else {
        count = 0;
        if (first[i] == second[count]) count++;
      }
    }
  
    return first + second.slice(count);
  }


  
// 




// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// complete the function
function solution(string) {
    
}

//my answer
function solution(string) {
    let newStr = string.split('')
  //   console.log(newStr)
    for (let i = 0; i < newStr.length; i++)
      if (newStr[i] == newStr[i].toUpperCase())
        newStr.splice([i], 0,' ').join('')
      else {
        
      }  
  //   console.log(newStr)
  
     
  }
  

//not sure why it doesnt concatenate my array

//THE OSLUTION

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }
