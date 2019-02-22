const flashCards = [
  {
    "question": "What does array.filter() do?",
    "answer":"method creates a new array with all elements that pass the test implemented by the provided function.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 1
  },
  {
    "question": "what does array.find() do?",
    "answer":"method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.",
    "returnValue": "Value",
    "prototypeKind": "Array",
    "uniqueId": 2
  },
  {
    "question": "What does array.forEach() do?",
    "answer":"method executes a provided function once for each array element.",
    "returnValue": "N/A",
    "prototypeKind": "Array",
    "uniqueId": 3
  },
  {
    "question": "What does array.map() do?",
    "answer":"method creates a new array with the results of calling a provided function on every element in the calling array.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 4
  },
  {
    "question": "What does array.slice() do?",
    "answer":"method changes the contents of an array by removing or replacing existing elements and/or adding new elements.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 5
  },
  {
    "question": "What does array.concat() do?",
    "answer":"method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 6
  },
  {
    "question": "What does array.splice() do?",
    "answer":"method changes the contents of an array by removing or replacing existing elements and/or adding new elements.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 7
  },
  {
    "question": "What does array.toString() do?",
    "answer":"method returns a string representing the specified array and its elements.",
    "returnValue": "String",
    "prototypeKind": "Array",
    "uniqueId": 8
  },
  {
    "question": "What does array.fill() do?",
    "answer":"method fills all the elements of an array from a start index to an end index with a static value. If the end index is not included, it will modify all the elements from the start index to the end of the array. It returns the modified array.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 9
  },
  {
    "question": "What does array.reverse() do?",
    "answer":"method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 10
  },
  {
    "question": "What does array.join() do?",
    "answer":"method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.",
    "returnValue": "String",
    "prototypeKind": "Array",
    "uniqueId": 11
  },
  {
    "question": "What does array.shift() do?",
    "answer":"method removes the first element from an array and returns that removed element. This method changes the length of the array.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 12
  },
  {
    "question": "What does array.unShift() do?",
    "answer":"method adds one or more elements to the beginning of an array and returns the new length of the array.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 13
  },
  {
    "question": "What does array.pop() do?",
    "answer":"method removes the last element from an array and returns that element. This method changes the length of the array.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 14
  },
  {
    "question": "What does array.push() do?",
    "answer":"method adds one or more elements to the end of an array and returns the new length of the array.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 15
  },
  {
    "question": "What does array.values() do?",
    "answer":"method returns a new Array Iterator object that contains the values for each index in the array.",
    "returnValue": "Array",
    "prototypeKind": "Array",
    "uniqueId": 16
  },
  {
    "question": "What does string.concat() do?",
    "answer":"method concatenates the string arguments to the calling string and returns a new string.",
    "returnValue": "String",
    "prototypeKind": "String",
    "uniqueId": 17
  },
  {
    "question": "What does string.indexOf() do?",
    "answer":"method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.",
    "returnValue": "Number",
    "prototypeKind": "String",
    "uniqueId": 18
  },
  {
    "question": "What does string.includes() do?",
    "answer":"method determines whether one string may be found within another string, returning true or false as appropriate.",
    "returnValue": "Boolean",
    "prototypeKind": "String",
    "uniqueId": 19
  },
  {
    "question": "What does string.search() do?",
    "answer":"method executes a search for a match between a regular expression and this String object.",
    "returnValue": "Number",
    "prototypeKind": "String",
    "uniqueId": 20
  },
  {
    "question": "What does string.slice() do?",
    "answer":"method extracts a section of a string and returns it as a new string, without modifying the original string.",
    "returnValue": "String",
    "prototypeKind": "String",
    "uniqueId": 21
  },
  {
    "question": "What does string.split() do?",
    "answer":"method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.",
    "returnValue": "Array",
    "prototypeKind": "String",
    "uniqueId": 22
  },
  {
    "question": "What does string.startsWith() do?",
    "answer":"method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.",
    "returnValue": "Boolean",
    "prototypeKind": "String",
    "uniqueId": 23
  },
  {
    "question": "What does string.substring() do?",
    "answer":"method returns the part of the string between the start and end indexes, or to the end of the string.",
    "returnValue": "String",
    "prototypeKind": "String",
    "uniqueId": 24
  },
  {
    "question": "What does string.toUpperCase() do?",
    "answer":"method returns the calling string value converted to uppercase (the value will be converted to a string if it isn\"t one).",
    "returnValue": "String",
    "prototypeKind": "String",
    "uniqueId": 25
  },
  {
    "question": "What does string.toLowerCase() do?",
    "answer": "method returns the calling string value converted to lower case.",
    "returnValue": "String",
    "prototypeKind": "String",
    "uniqueId": 26
  },
  {
    "question": "What does object.assign() do?",
    "answer": "method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.",
    "returnValue": "Object",
    "prototypeKind": "Object",
    "uniqueId": 27
  },
  {
    "question": "What does object.keys() do?",
    "answer": "method returns an array of a given object\"s own property names, in the same order as we get with a normal loop.",
    "returnValue": "Array",
    "prototypeKind": "Object",
    "uniqueId": 28
  },
  {
    "question": "What does object.toString() do?",
    "answer": "method returns a string representing the object.",
    "returnValue": "String",
    "prototypeKind": "Object",
    "uniqueId": 29
  },
  {
    "question": "What does object.values() do?",
    "answer": "method returns an array of a given object\"s own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).",
    "returnValue": "Array",
    "prototypeKind": "Object",
    "uniqueId": 30
  }
];

module.exports = { flashCards };