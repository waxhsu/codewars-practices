// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript


function twoSum(numbers, target) {
  
}


function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}




