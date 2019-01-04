const aTypes = [
  {
    "concat()": "This method is used to merge two or more arrays. This method also does not change the existing arrays, but instead returns a new array."
  },
  {
    "copyWithin()": "This method shallow copies part of an array to another location in the same array and returns it, without modifying its size."
  },
  {
    "entries()": "This method returns a new Array Iterator object that contains the key/value pairs for each index in the array."
  },
  {
    "every()": "This method tests whether all elements in the array pass the test implemented by the provided function."
  },
  {
    "fill()": "This method fills all the elements of an array from a start index to an end index with a static value. The end index is not included."
  },
  {
    "filter()": "This method creates a new array with all elements that pass the test implemented by the provided function."
  },
  {
    "find()": "This method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned."
  },
  {
    "findIndex()": "This method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test."
  },
  {
    "flat()": "This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth."
  },
  {
    "flatMap()": "This method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient."
  },
  {
    "forEach()": "This method executes a provided function once for each array element."
  },
  {
    "includes()": "This method determines whether an array includes a certain value among its entries, returning true or false as appropriate."
  },
  {
    "indexOf()": "This method returns the first index at which a given element can be found in the array, or -1 if it is not present."
  },
  {
    "join()": "This method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string."
  },
  {
    "keys()": "This method returns a new Array Iterator object that contains the keys for each index in the array."
  },
  {
    "lastIndexOf()": "This method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex."
  },
  {
    "map()": "This method creates a new array with the results of calling a provided function on every element in the calling array."
  },
  {
    "pop()": "This method removes the last element from an array and returns that element. This method also changes the length of the array."
  },
  {
    "push()": "This method adds one or more elements to the end of an array and returns the new length of the array."
  },
  {
    "reduce()": "This method executes a reducer function (that you provide) on each member of the array resulting in a single output value."
  },
  {
    "reduceRight()": "This method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value."
  },
  {
    "reverse()": "This method reverses an array in place. The first array element becomes the last, and the last array element becomes the first."
  },
  {
    "shift()": "This method removes the first element from an array and returns that removed element. This method also changes the length of the array."
  },
  {
    "slice()": "This method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified."
  },
  {
    "some()": "This method tests whether at least one element in the array passes the test implemented by the provided function."
  },
  {
    "sort()": "This method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."
  },
  {
    "splice()": "This method changes the contents of an array by removing or replacing existing elements and/or adding new elements."
  },
  {
    "toLocaleString()": "This method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”)."
  },
  {
    "toString()": "This method returns a string representing the specified array and its elements."
  },
  {
    "unshift()": "This method adds one or more elements to the beginning of an array and returns the new length of the array."
  },
  {
    "values()": "This method returns a new Array Iterator object that contains the values for each index in the array."
  }
]

module.exports = prototypes;
