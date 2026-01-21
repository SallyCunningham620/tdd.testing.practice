export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function shiftChar(char, shift) {
  const index = char.charCodeAt(0);
  let newIndex;

  //Upper case letters(A-Z)
  if (index >= 65 && index <= 90) {
    newIndex = ((index - 65 + shift) % 26) + 65;
  }
  //Lower case letters(a-z) 
  else if (index >= 97 && index <= 122) {
    newIndex = ((index - 97 + shift) % 26) + 97;
  }
  //Non-alphabetic Characters
  else {
    return char;
  }
  
  return String.fromCharCode(newIndex);
};

export function caesarCipher(str, shift) {
  const correctShift = (shift % 26 + 26) % 26;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += shiftChar(str[i], correctShift);
  }

  return result;
}