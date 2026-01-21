import { capitalize, reverseString, calculator, caesarCipher } from './function.js';

test('capitalize first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('')).toBe('');
});

test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('123!_')).toBe('_!321');
});

describe('calculator', () => {
  test('add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, 1)).toBe(0);
  });
  test('subtract two number', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract(3, 1)).toBe(2);
  });
  test('divide two numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(6, 2)).toBe(3);
  });
  test('multiply two numbers', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(2, 3)).toBe(6);
  });
});

describe('caesarCipher', () => {
  test('shift letters correctly with wrapping', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('abc', 4)).toBe('efg');
  });
  test('preserve upper and lower case letters', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');  
    expect(caesarCipher('fISh', 4)).toBe('jMWl');
  });
  test('non-alphabetical characters remain unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('It\'s a secret miSSion?', 5)).toBe('Ny\'x f xjhwjy rnXXnts?');
  });
  test('0 shift is unchanged', () => {
    expect(caesarCipher('NoChange', 0)).toBe('NoChange');
  });
  test('Large shifts', () => {
    expect(caesarCipher('abc', 40)).toBe('opq');
  })
})