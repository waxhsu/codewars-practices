// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a,b,c) {
   
  return false;
}

// make arr, sort arr
// input logic of a triangle
// return else {false}

function isTriangle(a,b,c) {
  let arr = [a,b,c]
  arr.sort((a,b) => a-b)

  if (a <= 0 || b <= 0 || c <= 0){
     return false
   } else if (arr[0] + arr[1] > arr[2]){
     return true
   } else {
     return false
   }
     
}

//... this is a shorter code
function isTriangle(a,b,c){
  return a + b > c && a + c > b && c + b > a;
  }


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

 */

function gimme (triplet) {

}

// my answer
function gimme (triplet) {
  const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}; // find the median first then find its index
  return triplet.indexOf((median(triplet)))
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
 */

function rowSumOddNumbers(n) {
	return n**3
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


 /*  Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.  */


function friend(friends){
  var realFriends = []
  for(let i = 0; i < friends.length; i++)
    if (friends[i].length == 4){
      realFriends.push(friends[i])
    } 
  return realFriends // PUT RETURN OUTSIDE OF THE FUNCTION
}
