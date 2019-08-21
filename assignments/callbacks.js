// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

// ===== getLength =====
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// inline
// const test_getLength = getLength(
//   items,
//   length => `This array has ${length} items.`
// );
// console.log(test_getLength);

// declared callback
const test_getLength_cb = length => {
  return `This array has ${length} items.`;
};
console.log(getLength(items, test_getLength_cb));

// ===== last =====
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
// inline
// const test_last = last(items, item => `${item} is the last item in the array.`);
// console.log(test_last);

// declared callback
const test_last_cb = item => {
  return `${item} is the last item in the array.`;
};
console.log(last(items, test_last_cb));

// ===== sumNums =====
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
// inline
// const test_sumNums = sumNums(5, 5, result => `5 + 5 equals ${result}`);
// console.log(test_sumNums);

// declared callback
const test_sumNums_cb = sum => {
  return `The sum of those numbers is ${sum}`;
};
console.log(sumNums(5, 5, test_sumNums_cb));

// ===== multiplyNums =====
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
// inline
// const test_multiplyNums = multiplyNums(
//   5,
//   5,
//   result => `The product of 5 * 5 equals ${result}`
// );
// console.log(test_multiplyNums);

// declared callback
const test_multiplyNums_cb = product => {
  return `The product of those two numbers is ${product}.`;
};
console.log(multiplyNums(5, 5, test_multiplyNums_cb));

// ===== contains =====
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item), item);
}
// inline
// const test_contains = contains("Gum", items, bool => {
//   return bool ? `Gum is in the array.` : `Gum is not in the array.`;
// });
// console.log(test_contains);

// declared callback
const test_contains = (bool, item) => {
  return bool ? `${item} is in the array.` : `${item} is not in the array`;
};
console.log(contains('Gum', items, test_contains));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const set = new Set();
  array.forEach(item => {
    if (!set.has(item)) set.add(item);
  });
  return cb([...set]);
}
items.push('Notebook', 'Gum', 'Shoe');
const uniqueItems = array => array;

console.log(removeDuplicates(items, uniqueItems));
console.log(items);
