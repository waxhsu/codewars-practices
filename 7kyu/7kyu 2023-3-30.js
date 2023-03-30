// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    return -1;
  }
  
  
  //MY SOLUTION
  
  function findNextSquare(sq) {
    // use modulus to determine if it's whole number
    if (Math.sqrt(sq) % 1 == 0) {
    // Math.sqrt() plus one then square it
    return ((Math.sqrt(sq))+1)**2
      } else {
    // non-whole numbers return below
        return -1
      }
  }
  