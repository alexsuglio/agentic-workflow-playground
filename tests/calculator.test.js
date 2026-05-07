const { add, subtract, multiply, divide, factorial, percentage } = require("../src/calculator");

describe("calculator", () => {
  describe("add", () => {
    it("should return the sum of two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it("should throw TypeError when given non-number input", () => {
      expect(() => add("2", 3)).toThrow(TypeError);
      expect(() => add(2, undefined)).toThrow(TypeError);
    });
  });

  describe("subtract", () => {
    it("should return the difference of two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it("should throw TypeError when given non-number input", () => {
      expect(() => subtract(null, 1)).toThrow(TypeError);
    });
  });

  describe("multiply", () => {
    it("should return the product of two numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it("should return 0 when multiplying by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it("should throw TypeError when given non-number input", () => {
      expect(() => multiply("3", 4)).toThrow(TypeError);
    });
  });

  describe("divide", () => {
    it("should return the quotient of two numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });

    it("should throw TypeError when given non-number input", () => {
      expect(() => divide(10, "2")).toThrow(TypeError);
    });
  });

  describe("factorial", () => {
    it("should return 1 for factorial of 0", () => {
      expect(factorial(0)).toBe(1);
    });

    it("should return 120 for factorial of 5", () => {
      expect(factorial(5)).toBe(120);
    });

    it("should throw an error for negative numbers", () => {
      expect(() => factorial(-3)).toThrow("Factorial requires a non-negative number");
    });

    it("should throw an error for non-integer numbers", () => {
      expect(() => factorial(3.5)).toThrow("Factorial requires an integer");
    });

    it("should throw TypeError when given non-number input", () => {
      expect(() => factorial("5")).toThrow(TypeError);
    });
  });

  describe("percentage", () => {
    it("should calculate the correct percentage", () => {
      expect(percentage(25, 100)).toBe(25);
    });

    it("should throw an error when total is zero", () => {
      expect(() => percentage(25, 0)).toThrow("Total cannot be zero");
    });

    it("should throw TypeError when given non-number input", () => {
      expect(() => percentage(25, "100")).toThrow(TypeError);
    });
  });
});
