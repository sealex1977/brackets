// '([{}])'
// [['(', ')'], ['[', ']'], ['{', '}']]

module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0 ) {
    return false;
  }

  const arrBrackets = bracketsConfig.map(index => index.join(''));

  for (let i = 0; i < arrBrackets.length; i++) {
    if (str.includes(arrBrackets[i])) {
      str = str.replace(arrBrackets[i], '');
      i = -1;
    }
  };
  
  return !str;
}