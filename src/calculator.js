// calculator.js
// Basic math utility module

/**
 * Validates that all provided arguments are finite numbers.
 * @param  {...*} args - Values to validate
 * @throws {TypeError} If any argument is not a finite number
 */
const validateNumbers = (...args) => {
  for (const arg of args) {
    if (typeof arg !== "number" || !Number.isFinite(arg)) {
      throw new TypeError(`Expected a finite number but received ${typeof arg === "number" ? arg : typeof arg}`);
    }
  }
};

/**
 * Adds two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {TypeError} If either argument is not a finite number
 * @example
 * add(2, 3); // 5
 */
const add = (a, b) => {
  validateNumbers(a, b);
  return a + b;
};

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {TypeError} If either argument is not a finite number
 * @example
 * subtract(10, 4); // 6
 */
const subtract = (a, b) => {
  validateNumbers(a, b);
  return a - b;
};

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {TypeError} If either argument is not a finite number
 * @example
 * multiply(3, 4); // 12
 */
const multiply = (a, b) => {
  validateNumbers(a, b);
  return a * b;
};

/**
 * Divides a by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {TypeError} If either argument is not a finite number
 * @throws {Error} If b is zero
 * @example
 * divide(10, 2); // 5
 */
const divide = (a, b) => {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

/**
 * Returns the factorial of n.
 * @param {number} n - A non-negative integer
 * @returns {number}
 * @throws {TypeError} If n is not a finite number
 * @throws {Error} If n is negative or not an integer
 * @example
 * factorial(5); // 120
 */
const factorial = (n) => {
  validateNumbers(n);
  if (!Number.isInteger(n)) {
    throw new Error("Factorial requires an integer");
  }
  if (n < 0) {
    throw new Error("Factorial requires a non-negative number");
  }
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

/**
 * Returns the percentage of part relative to total.
 * @param {number} part
 * @param {number} total
 * @returns {number}
 * @throws {TypeError} If either argument is not a finite number
 * @throws {Error} If total is zero
 * @example
 * percentage(25, 100); // 25
 */
const percentage = (part, total) => {
  validateNumbers(part, total);
  if (total === 0) {
    throw new Error("Total cannot be zero");
  }
  return (part / total) * 100;
};

module.exports = { add, subtract, multiply, divide, factorial, percentage };
