const palindromes = function (string) {
  string = string.toLowerCase().replace(/[!., ]/g, '');

  const halfLen = Math.floor(string.length / 2);

  for(let i = 0; i <= halfLen; i++) {
    if (string[i] !== string[string.length - i - 1]) return false;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
