# tdd.testing.practice

TDD Testing practice
Create tests to verify functions are working correctly.

Used below parts to create VSC environment to use Jest and Babel.

Part 1:
1. Initialize your project:
Open your terminal in VS Code and run "npm init -y" to create a package.json file.
2. Install Jest and Babel dependencies:
Install Jest, Babel core, Babel preset env, and babel-jest using npm:
"npm install --save-dev jest @babel/core @babel/preset-env babel-jest"
3. Configure NPM scripts:
Open your package.json file and replace the default test script with a script to run Jest: json
"scripts": {
  "test": "jest"
},
4. Create a Babel configuration file:
Create a new file named .babelrc (or babel.config.js) in your project's root directory and add the following configuration to tell Babel to use the env preset, which handles modern JavaScript features including ES6 modules: json
module.exports = {
  "presets": ["@babel/preset-env"]
}
5. Use ES6 syntax:
You can now use ES6 import/export syntax in your project and test files. Jest will automatically use the babel-jest transformation to understand the syntax before running the tests. 

Part 2: Assignment - Writing Functions and Tests
1. Create separate files for your functions (e.g., functions.js) and their corresponding tests (e.g., functions.test.js). 
functions.js (Example implementations)
javascript
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

// ... (Implement caesarCipher and analyzeArray here) ...

2. functions.test.js (Example tests)
javascript
import { capitalize, reverseString, calculator } from './functions.js';

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
  // ... (Add tests for subtract, divide, multiply) ...
});

// ... (Add tests for caesarCipher and analyzeArray) ...

Part 3:
Running Tests
To run your tests, simply use the command you configured in package.json: 
bash
npm test