// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

// MY ANSWER
multiplicationTable = function(size) {
    const table = [[size]]
    
    return tableNew
  }

//SOLUTION
multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }



// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

  function findDifference(a, b) {
    return Math.abs(a.reduce((a, b) => a*b, 1)-b.reduce((a, b) => a*b, 1))
  }