// data-processor.js
// Data processing utilities
//
// ✨ DEMO: This file has TODO stubs waiting to be implemented.
//    Create an issue, assign it to Copilot, and watch it implement them!

/**
 * Filters an array of objects by a given key-value pair.
 * @param {Object[]} data - Array of objects to filter
 * @param {string} key - The key to filter by
 * @param {*} value - The value to match
 * @returns {Object[]} Filtered array
 */
const filterBy = (data, key, value) => {
  if (!Array.isArray(data)) return [];
  return data.filter((item) => item[key] === value);
};

/**
 * Groups an array of objects by a specified key.
 * @param {Object[]} data - Array of objects to group
 * @param {string} key - The key to group by
 * @returns {Object} An object where each property is a group
 * TODO: Implement this function
 */
const groupBy = (data, key) => {
  // TODO: implement groupBy logic
  throw new Error("groupBy is not yet implemented");
};

/**
 * Sorts an array of objects by a given key.
 * @param {Object[]} data - Array of objects to sort
 * @param {string} key - The key to sort by
 * @param {"asc"|"desc"} direction - Sort direction
 * @returns {Object[]} Sorted array
 * TODO: Implement this function
 */
const sortBy = (data, key, direction = "asc") => {
  // TODO: implement sortBy logic (handle both "asc" and "desc")
  throw new Error("sortBy is not yet implemented");
};

/**
 * Returns summary statistics for a numeric field across an array of objects.
 * @param {Object[]} data - Array of objects
 * @param {string} key - Numeric key to summarise
 * @returns {{ min: number, max: number, sum: number, avg: number, count: number }}
 * TODO: Implement this function
 */
const summarise = (data, key) => {
  // TODO: implement summarise — return min, max, sum, avg, count
  throw new Error("summarise is not yet implemented");
};

/**
 * Removes duplicate objects from an array based on a key.
 * @param {Object[]} data - Array of objects
 * @param {string} key - Key to determine uniqueness
 * @returns {Object[]} De-duplicated array
 * TODO: Implement this function
 */
const deduplicateBy = (data, key) => {
  // TODO: implement deduplicateBy — keep first occurrence of each unique key value
  throw new Error("deduplicateBy is not yet implemented");
};

module.exports = { filterBy, groupBy, sortBy, summarise, deduplicateBy };
