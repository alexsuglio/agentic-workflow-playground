// string-utils.js
// String helper utilities
//
// 📝 DEMO: This file has no JSDoc documentation.
//    Create an issue, assign it to Copilot, and watch it write complete docs!

const capitalize = (str) => {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const truncate = (str, maxLength, suffix = "...") => {
  if (!str || typeof str !== "string") return str;
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
};

const camelToKebab = (str) => {
  if (!str || typeof str !== "string") return str;
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

const kebabToCamel = (str) => {
  if (!str || typeof str !== "string") return str;
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
};

const countWords = (str) => {
  if (!str || typeof str !== "string") return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
};

const isPalindrome = (str) => {
  if (!str || typeof str !== "string") return false;
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
};

const slugify = (str) => {
  if (!str || typeof str !== "string") return str;
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

module.exports = {
  capitalize,
  truncate,
  camelToKebab,
  kebabToCamel,
  countWords,
  isPalindrome,
  slugify,
};
