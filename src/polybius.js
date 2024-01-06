// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquare = [
    { char: 'a', code: '11' }, { char: 'b', code: '21' }, { char: 'c', code: '31' }, { char: 'd', code: '41' }, { char: 'e', code: '51' },
    { char: 'f', code: '12' }, { char: 'g', code: '22' }, { char: 'h', code: '32' }, { char: 'i/j', code: '42' }, { char: 'k', code: '52' },
    { char: 'l', code: '13' }, { char: 'm', code: '23' }, { char: 'n', code: '33' }, { char: 'o', code: '43' }, { char: 'p', code: '53' },
    { char: 'q', code: '14' }, { char: 'r', code: '24' }, { char: 's', code: '34' }, { char: 't', code: '44' }, { char: 'u', code: '54' },
    { char: 'v', code: '15' }, { char: 'w', code: '25' }, { char: 'x', code: '35' }, { char: 'y', code: '45' }, { char: 'z', code: '55' }
  ];

  function polybius(input, encode = true) {
    if (encode) {
      return input.toLowerCase()
        .split('')
        .map(char => {
          if (char === ' ') {
            return ' ';
          }
          const codeObject = polybiusSquare.find(obj => obj.char.includes(char));
          return codeObject ? codeObject.code : '';
        })
        .join('');
    } else {
      const inputSplit = input.split(' ').join('');
      if (inputSplit.length % 2 !== 0) {
        return false;
      }
      return input
        .split(' ')
        .map(word => {
          return word
            .split('')
            .reduce((acc, num, index, arr) => {
              if (index % 2 === 0) {
                const current = num + arr[index + 1];
                if (current === '42') {
                  return acc + '(i/j)';
                }
                const charObject = polybiusSquare.find(obj => obj.code === current);
                return charObject ? acc + charObject.char : acc;
              }
              return acc;
            }, '');
        })
        .join(' ');
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };