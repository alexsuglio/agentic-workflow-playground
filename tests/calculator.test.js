const { add, subtract, multiply, divide, factorial, percentage } = require("../src/calculator");

describe("calculator", () => {
  describe("add", () => {
    it("should return the sum of two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });
  });

  describe("subtract", () => {
    it("should return the difference of two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });
  });

  describe("multiply", () => {
    it("should return the product of two numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it("should return 0 when multiplying by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    it("should return the quotient of two numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });

    // 🧪 DEMO: This test is missing — ask Copilot to add edge case tests!
    // Missing: test for division by zero
  });

  describe("factorial", () => {
    it("should return 1 for factorial of 0", () => {
      expect(factorial(0)).toBe(1);
    });

    it("should return 120 for factorial of 5", () => {
      expect(factorial(5)).toBe(120);
    });

    // 🧪 DEMO: Missing edge case tests for negative numbers and non-integers
  });

  describe("percentage", () => {
    it("should calculate the correct percentage", () => {
      expect(percentage(25, 100)).toBe(25);
    });

    // 🧪 DEMO: Missing edge case test for total = 0
  });
});
