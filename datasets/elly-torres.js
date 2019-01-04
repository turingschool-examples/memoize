const prototypeMethods = [
  { "Array Prototype Methods": [
    { "Mutators": [ 
      { "method": ".pop()", "id": 1, "description": "Removes the last element from an array and returns that element.", "parameters": "none"},
      { "method": ".push()", "id": 2, "description": "Adds one or more elements to the end of an array and returns the new length of the array.", "parameters": "The elements to add to the end of the array"},
      { "method": ".shift()", "id": 3, "description": "Removes the first element from an array and returns that element.", "parameters": "none"},
      { "method": ".sort()", "id": 4, "description": "Sorts the elements of an array in place and returns the array.", "parameters": "Optional function, first element to compare, second element to compare"},
      { "method": ".splice()", "id": 5, "description": "Adds and/or removes elements from an array.", "parameters": "startIndex, optional deleteCount, optional item(s) to be added"},
      { "method": ".unshift()", "id": 6, "description": "Adds one or more elements to the front of an array and returns the new length of the array.", "parameters": "The elements to add to the front of the array"}
    ] },
    { "Iterators": [
      { "method": ".filter()", "id": 7, "description": "Creates a new array with all of the elements for which the provided function returns true.", "parameters": "Callback function which takes in current element and optional index, array, thisArg" },
      { "method": ".find()", "id": 8, "description": "Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.", "parameters": "Callback function which takes in current element and optional index, array, thisArg" },
      { "method": ".forEach()", "id": 9, "description": "Executes a provided function once for each array element and returns undefined.", "parameters": "Callback function which takes in current element and optional index, array, thisArg" },
      { "method": ".map()", "id": 10, "description": "Creates a new array with the results of calling a provided function on every element and returns array of same length.", "parameters": "Callback function which takes in current element and optional index, array, thisArg" },
      { "method": ".reduce()", "id": 11, "description": "Apply a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.", "parameters": "Callback function which takes in an accumulator, current element and optional index, array, initialValue" }
    ] },
    { "Accessors": [
      { "method": ".concat()", "id": 12, "description": "Merges two or more arrays and does not change the existing arrays, but instead returns a new array.", "parameters": "Arrays and/or values to concatenate into a new array." },
      { "method": ".includes()", "id": 13, "description": "Determines whether an array includes a certain value among its entries, returning true or false as appropriate.", "parameters": "The value to search for and optional startIndex" },
      { "method": ".indexOf()", "id": 14, "description": "Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.", "parameters": "Element to locate and optional startIndex" },
      { "method": ".join()", "id": 15, "description": "Creates and returns a new string by concatenating all of the elements in an array (or array-like object), separated by commas or a specified separator string.", "parameters": "Optional separator" },
      { "method": ".slice()", "id": 16, "description": "Returns a portion of an array into a new array selected from begin to end (end not included in new array).", "parameters": "Optional startIndex(otherwise starts at 0), negative value that extracts from end, and index to end" }
    ] }
  ] },
  { "String Prototype Methods": [
    { "method": ".charAt()", "id": 17, "description": "Returns a new string (exactly one UTF-16 code unit) at the specified index.", "parameters": "Index (if index omitted, default is 0)" },
    { "method": ".concat()", "id": 18, "description": "Combines string arguments and returns a new string", "parameters": "String(s) to concatenate to calling string" },
    { "method": ".includes()", "id": 19, "description": "Determines whether one string may be found within another string, returning true or false as appropriate.", "parameters": "String to search for in calling string and optional startIndex" },
    { "method": ".indexOf()", "id": 20, "description": "Returns the index within the calling string of the first occurrence of the specified value, or -1 if not found.", "parameters": "A string representing the value to search for and optional startIndex" },
    { "method": ".padEnd()", "id": 21, "description": "Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.", "parameters": "Target length and optional string to pad with" },
    { "method": ".repeat()", "id": 22, "description": "Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.", "parameters": "An integer indicating the number of times to repeat the string" },
    { "method": ".slice()", "id": 23, "description": "Extracts a section of a string and returns a new string, without modifying the original string.", "parameters": "StartIndex and optional endIndex" },
    { "method": ".split()", "id": 24, "description": "Splits a string into an array of strings by separating the string into substrings, using a specified separator string.", "parameters": "Optional separator and integerLimit specifying a limit on the number of splits" },
    { "method": ".substring()", "id": 25, "description": "Returns the part of the string between the start and end indexes, or to the end of the string.", "parameters": "StartIndex and optional endIndex" },
    { "method": ".toLowerCase()", "id": 26, "description": "Returns the calling string value converted to lower case.", "parameters": "none" },
    { "method": ".toUpperCase()", "id": 27, "description": "Returns the calling string value converted to uppercase.", "parameters": "none" },
    { "method": ".trim()", "id": 28, "description": "Trims whitespace from the beginning and end of the string.", "parameters": "none" }
  ] },
  { "Object Prototype Methods": [
    { "method": "Object.keys()", "id": 29, "description": "Used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.", "parameters": "Target object and source object" },
    { "method": "Object.assign()", "id": 30, "description": "Returns an array of a given object\"s own property names, in the same order as we get with a normal loop.", "parameters": "Source object" }
  ] }
];



export { prototypeMethods };
