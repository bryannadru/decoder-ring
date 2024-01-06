const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    // Error handling for the alphabet parameter
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    const alphabetSet = new Set(alphabet);
    if (alphabetSet.size !== 26) {
      return false;
    }
    
    
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz";
    const alphabetMap = {};
    for (let i = 0; i < alphabetArray.length; i++) {
      alphabetMap[alphabetArray[i]] = alphabet[i];
    }


    // encode or decode based on value
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();
      if (char === " ") {
        result += " ";
      } else {
        const substitutionCharacter = encode ? alphabetMap[char] : getKeyByValue(alphabetMap, char);
        result += substitutionCharacter;
      }
    }
    return result;
  }

  // Helper function to get the key of an object based on its value
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };