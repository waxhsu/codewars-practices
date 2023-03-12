// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
    // Your code here
  }

// MY ANSWER


// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

// MY ANSWER
function isValidWalk(walk) {
  let sum = 0
  if (walk.length !== 10){
    return false 
  } else {
    walk.forEach((item,index) => {
      if (walk[index] == 'n'){
        sum += 1
      } else if (walk[index] == 's'){
        sum -= 1
      } else if (walk[index] == 'e'){
        sum += 2
      } else {
        sum -= 2
      }
    })
  if (sum == 0){
    return true
  } else {
    return false
  }
  }
}

// SHORTER OLUTION

// https://www.codewars.com/kata/54da539698b8a2ad76000228/solutions/javascript
// there's multiple solutions but all interesting

