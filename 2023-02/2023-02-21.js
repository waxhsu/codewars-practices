/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */


//my answer  -- this is actually the shortest answer yay
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a-b)
    return numbers[0]+numbers[1]
  }

//////////////////////////////////////////
//////////////////////////////////////////

/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
 */

function sortByLength (array) {
    return array.sort((a,b) => a.length-b.length)
  };


//////////////////////////////////////////
//////////////////////////////////////////




/* For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0] */


function longestRepetition(s) {
  return ["",0];
}


//CORRECT ANSWER
function longestRepetition(s) {
  let count = 0;
  let prevLetter = '';
  
  return s.toLowerCase().split('').reduce((acc, curr) => {
    if(curr === prevLetter){
      count++;
    }
    else{
      count = 1;
    }

    if(count > acc[1]){
      acc[1] = count;
      acc[0] = curr;
    }

    prevLetter = curr;
    return acc;
  }, ['', 0]);
}



////////////////////////////////////////////////////////
////////////////////////////////////////////////////////








