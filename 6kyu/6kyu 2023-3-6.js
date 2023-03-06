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
