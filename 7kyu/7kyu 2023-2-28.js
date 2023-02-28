// https://www.codewars.com/kata/58b972cae826b960a300003e/train/javascript


function missingWord(nums, str) {
    // Jenny needs your help...
  }


//MY SOLUTION

function missingWord(nums, str) {
    let newArr = []
    nums.sort((a,b) => a-b);
    if (str.length > nums[2]){
    for (let i = 0; i<nums.length; i++)
      newArr.push(str.split(' ').join('')[nums[i]])
      return newArr.join('').toLowerCase()
    } else {
      return 'No mission today'
    }  
  }