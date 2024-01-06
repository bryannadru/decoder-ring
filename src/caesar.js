// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  function caesar(input, shift , encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    
   
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    
      const direction = encode ? 1 : -1;
    
    
   const output = input 
   .toLowerCase() 
   .split("")
   .map((char) => { 
     if (!/[a-z]/.test(char)) { 
  return char;
  }

      
      const currentIndex = alphabet.indexOf(char);  
      const newIndex = (currentIndex + direction * shift + 26) % 26; 
       // ensures a positive number 
      return alphabet[newIndex];
    })
    .join("");
    
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };