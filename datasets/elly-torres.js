const prototypeMethods = [
  { 'Array Prototype Methods': [
    { 'Mutators': [ 
      { 'method': '.pop()', 'id': 1, 'description': 'Removes the last element from an array and returns that element.', 'parameters': 'none'},
      { 'method': '.push()', 'id': 2, 'description': 'Adds one or more elements to the end of an array and returns the new length of the array.', 'parameters': 'The elements to add to the end of the array'},
      { 'method': '.shift()', 'id': 3, 'description': 'Removes the first element from an array and returns that element.', 'parameters': 'none'},
      { 'method': '.sort()', 'id': 4, 'description': 'Sorts the elements of an array in place and returns the array.', 'parameters': 'Optional function, first element to compare, second element to compare'},
      { 'method': '.splice()', 'id': 5, 'description': 'Adds and/or removes elements from an array.', 'parameters': 'Index to start, optional deleteCount, optional item(s) to be added'},
      { 'method': '.unshift()', 'id': 6, 'description': 'Adds one or more elements to the front of an array and returns the new length of the array.', 'parameters': 'The elements to add to the front of the array'}
    ] },
    { 'Iterators': [
      { 'method': '.filter()', 'id': 7, 'description': 'Creates a new array with all of the elements for which the provided function returns true.', 'parameters': 'Callback function which takes in current element and optional index, array, thisArg' },
      { 'method': '.find()', 'id': 8, 'description': 'Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.', 'parameters': 'Callback function which takes in current element and optional index, array, thisArg' },
      { 'method': '.forEach()', 'id': 9, 'description': 'Executes a provided function once for each array element and returns undefined.', 'parameters': 'Callback function which takes in current element and optional index, array, thisArg' },
      { 'method': '.map()', 'id': 10, 'description': 'Creates a new array with the results of calling a provided function on every element and returns array of same length.', 'parameters': 'Callback function which takes in current element and optional index, array, thisArg' },
      { 'method': '.reduce()', 'id': 11, 'description': 'Apply a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.', 'parameters': 'Callback function which takes in an accumulator, current element and optional index, array, initialValue' }
    ] },
    { 'Accessors': [
      { 'method': '.concat()', 'id': 12, 'description': 'Merges two or more arrays and does not change the existing arrays, but instead returns a new array.', 'parameters': 'Arrays and/or values to concatenate into a new array.' },
      { 'method': '.includes()', 'id': 13, 'description': 'Determines whether an array includes a certain value among its entries, returning true or false as appropriate.', 'parameters': 'The value to search for and optional index to start' },
      { 'method': '.indexOf()', 'id': 14, 'description': 'Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.', 'parameters': 'Element to locate and optional index to start' },
      { 'method': '.join()', 'id': 15, 'description': 'Creates and returns a new string by concatenating all of the elements in an array (or array-like object), separated by commas or a specified separator string.', 'parameters': 'Optional separator' },
      { 'method': '.slice()', 'id': 16, 'description': 'Returns a portion of an array into a new array selected from begin to end (end not included in new array).', 'parameters': 'Optional index to start(otherwise starts at 0), negative value that extracts from end, and index to end' }
    ] }
  ] },
  { 'String Prototype Methods': [
    {}
  ] },
  { 'Object Prototype Methods': [
    {}
  ] }
];

const loopStatements = [
  { 'for': {} },
  { 'for in': {} },
  { 'for of': {} },
  { 'while': {} }
];






export {prototypeMethods, loopStatements};