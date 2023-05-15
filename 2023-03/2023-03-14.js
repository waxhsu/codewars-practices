// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

// MY ATTMEPT

function bouncingBall(h,  bounce,  window) {
    let seeBall = 1
    if (h > 0 && bounce > 0 && bounce < 1 && window < h){
      for (let i = 0; i < h*bounce; i++)
        if (h*bounce > window){
          seeBall++
        }
  //     console.log(seeBall)
      return seeBall
    } else {
      return -1
    }
  }
    

// SOLUTION

// make it run the function again == RECURSION
function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
      return -1;
    }
  
    var newHeight = h * bounce;
    return bouncingBall(newHeight, bounce, window) + 2;
  }


