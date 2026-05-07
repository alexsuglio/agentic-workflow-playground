// calculator.js
// Basic math utility module
//
// 🐛 DEMO: This file contains intentional bugs.
//    Create an issue, assign it to Copilot, and watch it find and fix them!

/**
 * Adds two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const add = (a, b) => a + b;

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const subtract = (a, b) => a - b;

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const multiply = (a, b) => a * b;

/**
 * Divides a by b.
 * BUG: Does not handle division by zero — throws an unhandled Infinity result.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const divide = (a, b) => a / b;

/**
 * Returns the factorial of n.
 * BUG: Does not handle negative numbers or non-integers.
 * @param {number} n
 * @returns {number}
 */
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1); // BUG: infinite recursion for negative n
};

/**
 * Returns the percentage of part relative to total.
 * BUG: Does not guard against total being zero.
 * @param {number} part
 * @param {number} total
 * @returns {number}
 */
const percentage = (part, total) => (part / total) * 100;

module.exports = { add, subtract, multiply, divide, factorial, percentage };
