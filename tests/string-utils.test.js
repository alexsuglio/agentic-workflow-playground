const {
  capitalize,
  truncate,
  camelToKebab,
  kebabToCamel,
  countWords,
  isPalindrome,
  slugify,
} = require("../src/string-utils");

describe("string-utils", () => {
  describe("capitalize", () => {
    it("should capitalize the first letter and lowercase the rest", () => {
      expect(capitalize("hello WORLD")).toBe("Hello world");
    });

    it("should return non-string input unchanged", () => {
      expect(capitalize(null)).toBeNull();
    });
  });

  describe("truncate", () => {
    it("should truncate a string longer than maxLength", () => {
      expect(truncate("Hello, World!", 8)).toBe("Hello...");
    });

    it("should not truncate a string shorter than maxLength", () => {
      expect(truncate("Hi", 10)).toBe("Hi");
    });

    it("should support a custom suffix", () => {
      expect(truncate("Hello, World!", 20, " [more]")).toBe("Hello, World!");
    });
  });

  describe("camelToKebab", () => {
    it("should convert camelCase to kebab-case", () => {
      expect(camelToKebab("myVariableName")).toBe("my-variable-name");
    });
  });

  describe("kebabToCamel", () => {
    it("should convert kebab-case to camelCase", () => {
      expect(kebabToCamel("my-variable-name")).toBe("myVariableName");
    });
  });

  describe("countWords", () => {
    it("should count words in a sentence", () => {
      expect(countWords("the quick brown fox")).toBe(4);
    });

    it("should handle multiple spaces between words", () => {
      expect(countWords("  hello   world  ")).toBe(2);
    });

    it("should return 0 for empty string", () => {
      expect(countWords("")).toBe(0);
    });
  });

  describe("isPalindrome", () => {
    it("should return true for a palindrome", () => {
      expect(isPalindrome("racecar")).toBe(true);
    });

    it("should return true for a phrase palindrome ignoring spaces and case", () => {
      expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    });

    it("should return false for a non-palindrome", () => {
      expect(isPalindrome("hello")).toBe(false);
    });
  });

  describe("slugify", () => {
    it("should convert a title to a URL slug", () => {
      expect(slugify("Hello World!")).toBe("hello-world");
    });

    it("should collapse multiple spaces and dashes", () => {
      expect(slugify("My   Blog -- Post")).toBe("my-blog-post");
    });
  });
});
