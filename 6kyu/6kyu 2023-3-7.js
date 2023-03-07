// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
    // build here
  }

// MY ANSWER - but for some reason its wrong
function towerBuilder(nFloors) {
  let tower = [] 
  let asterisk = []
  let space = []
  
  for (let i = 1; i<=nFloors; i++) {
    space = " ".repeat(nFloors-1)
    asterisk  = "*".repeat((2*i) - 1) //<-- FUCK
    tower.push(`${space}${asterisk}${space}`)
    
  }

  return tower
}



// SOLUTION

function towerBuilder(floors){
    let space,star, tower = [];
    for(i = 1; i <= floors; i++){
      space = " ".repeat(floors - i); //<-- FUCK
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower;
  }

