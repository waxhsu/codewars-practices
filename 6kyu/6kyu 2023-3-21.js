// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
    
  }


// MY SOLUTION
//i dont get it

// ANSWER

function queueTime(customers, n) {
  
    // Make an array containing n amount of elements, 
    // n representing the number of tills, 
    // and fill with zeroes
    var tills = new Array(n).fill(0);
  
    // Iterate through the customers 
    for (let time of customers) {
  
      // Find the till that has the least time
      let idx = tills.indexOf(Math.min(...tills));
  
      // Add the time, representing the customer to
      // the till that has the least time
      tills[idx] += time;
    }
  
    // Return the till that has the longest wait time
    // This is the required time to get all customers
    // through the que.
    return Math.max(...tills);
  }



////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x){

}

// kinda by solution
function high(x){
    let wordList = x.split(' ')
    const getScore = (word) => {
      return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
    }
    const scoreList = wordList.map(word => getScore(word))
    
    
    let highestIndex = 0;
    let highestScore = 0;
    scoreList.forEach((score, i) => {
      if (score > highestScore) {
        highestIndex = i;
        highestScore = score;
      }
    });
    
    return wordList[highestIndex];
    
    
  }


// ANSWER
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }











