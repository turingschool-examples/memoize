const arrayPrototypes = [
    {
      'name': "Array.length",
      'definition': "Sets or returns the number of elements in that array",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length'
    },
    {
      'name': "Array.from()",
      'definition': "Creates a new, shallow-copied Array instance from an array-like or iterable object.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
    },
    {
      'name': "Array.isArray()",
      'definition': "Determines whether the passed value is an Array.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray',
    },
    {
      'name': "Array.of()",
      'definition': "Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of',
    },
    {
      'name': "concat()",
      'definition': "Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    },
    {
      'name': "copyWithin()",
      'definition': "Shallow copies part of an array to another location in the same array and returns it, without modifying its size.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin',
    },
    {
      'name': "entries()",
      'definition': "Returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries',
    },
    {
      'name': "every()",
      'definition': "Tests whether all elements in the array pass the test implemented by the provided function.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
    },
    {
      'name': "fill()",
      'definition': "Fills all the elements of an array from a start index to an end index with a static value. The end index is not included",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
    },
    {
      'name': "filter()",
      'definition': "Creates a new array with all elements that pass the test implemented by the provided function.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
    },
    {
      'name': "find()",
      'definition': "Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    },
    {
      'name': "findIndex()",
      'definition': "Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
    },
    {
      'name': "forEach()",
      'definition': "Executes a provided function once for each array element",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
    },
    {
      'name': "includes()",
      'definition': "Determines whether an array includes a certain element, returning true or false as appropriate",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
    },
    {
      'name': "indexOf()",
      'definition': "Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
    },
    {
      'name': "join()",
      'definition': "Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
    {
      'name': "keys()",
      'definition': "Returns a new Array Iterator object that contains the keys for each index in the array.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
    },
    {
      'name': "lastIndexOf()",
      'definition': "Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
    {
      'name': "map()",
      'definition': "Creates a new array with the results of calling a provided function on every element in the calling array.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
    },
    {
      'name': "pop()",
      'definition': "removes the last element from an array and returns that element. This method changes the length of the array.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
    },
    {
      'name': "push()",
      'definition': "Adds one or more elements to the end of an array and returns the new length of the array.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    },
    {
      'name': "reduce()",
      'definition': "Executes a reducer function (that you provide) on each member of the array resulting in a single output value.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
    },
    {
      'name': "reverse()",
      'definition': "Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
    },
    {
      'name': "shift()",
      'definition': "Removes the first element from an array and returns that removed element. This method changes the length of the array.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
    },
    {
      'name': "slice()",
      'definition': "returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
    },
    {
      'name': "sort()",
      'definition': "Sorts the elements of an array in place and returns the array.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
    },
    {
      'name': "splice()",
      'definition': "Changes the contents of an array by removing existing elements and/or adding new elements.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
    },
    {
      'name': "toString()",
      'definition': "returns a string representing the specified array and its elements.",
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString',
    }
  ];


    
