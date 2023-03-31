// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

function removeSmallest(numbers) {

}

// MY SOLUTION

function removeSmallest(numbers) {
    let smallest = Math.min(...numbers)  
    // got the smallest value
  
    let index = numbers.indexOf(smallest)
    // find index of the smallest value
    
    numbers.splice(index, 1); 
    // splice value based on index of smallest
  
    return numbers    
}







