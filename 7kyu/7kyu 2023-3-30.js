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
  

  // https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript


// MY SOLUTION
function greet(language) {
    const choices = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso',
    }
    
return choices[language] || 'Welcome'
    
    }

