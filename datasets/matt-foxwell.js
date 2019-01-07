const arrayMethods = [
  {
    'index': 0,
    'name': 'concat',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    'mutator': false,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 1,
    'name': 'copyWithin',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    'mutator': true,
    'iterator': false,
    'syntax': 'arr.copyWithin(target, start, end)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'target': 'Zero based index at which to copy the sequence to. If negative, target will be counted from the end.' },
      { 'start': 'Zero based index at which to start copying elements from. If negative, start will be counted from the end.' },
      { 'end': 'Zero based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end.' }
    ],
    'Return': 'The modified array.'
  },
  {
    'index': 2,
    'name': 'every',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
    'mutator': null,
    'iterator': true,
    'syntax': 'arr.every(callback(element, index, array), thisArg)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'callback': 'Function to test for each element, taking three arguments:' },
      { 'element': 'The current element being processed in the array.' },
      { 'index': 'The index of the current element being processed in the array.' },
      { 'array': 'The array every was called upon.' },
      { 'thisArg': 'Value to use as this when executing callback.' }
    ],
    'Return': 'true if the callback function returns a truthy value for every array element; otherwise, false.'
  },
  {
    'index': 3,
    'name': 'fill',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
    'mutator': true,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 4,
    'name': 'filter',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
    'mutator': null,
    'iterator': true,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 5,
    'name': 'find',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    'mutator': null,
    'iterator': true,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 6,
    'name': 'findIndex',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
    'mutator': null,
    'iterator': true,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 7,
    'name': 'forEach',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
    'mutator': null,
    'iterator': true,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 8,
    'name': 'from',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
    'mutator': null,
    'iterator': null,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 9,
    'name': 'includes',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
    'mutator': false,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 10,
    'name': 'indexOf',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
    'mutator': false,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 11,
    'name': 'isArray',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray',
    'mutator': null,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 12,
    'name': 'join',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
    'mutator': false,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 13,
    'name': 'keys',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
    'mutator': null,
    'iterator': true,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 14,
    'name': 'lastIndexOf',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
    'mutator': false,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 15,
    'name': 'of',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of',
    'mutator': null,
    'iterator': null,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 16,
    'name': 'map',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
    'mutator': null,
    'iterator': true,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 17,
    'name': 'pop',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
    'mutator': true,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 18,
    'name': 'push',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    'mutator': true,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 19,
    'name': 'reduce',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
    'mutator': null,
    'iterator': true,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 20,
    'name': 'reverse',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
    'mutator': true,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 21,
    'name': 'shift',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
    'mutator': true,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 22,
    'name': 'slice',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
    'mutator': false,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 23,
    'name': 'some',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
    'mutator': null,
    'iterator': true,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 24,
    'name': 'sort',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
    'mutator': true,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 25,
    'name': 'splice',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
    'mutator': true,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 26,
    'name': 'toString',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString',
    'mutator': false,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 27,
    'name': 'unshift',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
    'mutator': true,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  },
  {
    'index': 28,
    'name': 'values',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values',
    'mutator': null,
    'iterator': true,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  }
]

const stringMethods = [
  {
    'index': 0,
    'name': 'charAt',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt',
    'syntax': 'str.concat(string2, string3, ..., stringN)',
    'example': `  var sentence = 'The quick dog.';
  var index = 4;

  console.log(sentence.charAt(index));
  // expected output: "q"`,
    'Parameters': [
      { 'index': 'An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.' }
    ],
    'Return value': 'A string representing the character (exactly one UTF-16 code unit) at the specified index; empty string if index is out of range.'
  },
  {
    'index': 1,
    'name': 'charCodeAt',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt',
    'syntax': 'str.charCodeAt(index)',
    'example': `  var sentence = 'The quick dog.';
  var index = 4;

  console.log(sentence.charCodeAt(index))
  // expected output: 113`,
    'Parameters': [
      { 'index': 'An integer greater than or equal to 0 and less than the length of the string; if it is not a number, it defaults to 0.' }
    ],
    'Return value': 'A number representing the UTF-16 code unit value of the character at the given index; NaN if index is out of range.'
  },
  {
    'index': 2,
    'name': 'concat',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat',
    'syntax': 'str.concat(string2, string3, ..., stringN)',
    'example': `  var str1 = 'Hello';
  var str2 = 'World';

  console.log(str1.concat(' ', str2));
  // expected output: "Hello World"`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 3,
    'name': 'endsWith',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 4,
    'name': 'includes',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 5,
    'name': 'indexOf',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 6,
    'name': 'lastIndexOf',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 7,
    'name': 'padEnd',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 8,
    'name': 'padStart',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 9,
    'name': 'repeat',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 10,
    'name': 'replace',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 11,
    'name': 'search',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 12,
    'name': 'slice',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 13,
    'name': 'split',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 14,
    'name': 'startsWith',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWitht',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 15,
    'name': 'substring',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 16,
    'name': 'toUpperCase',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 17,
    'name': 'trim',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 18,
    'name': 'trimEnd',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  },
  {
    'index': 19,
    'name': 'trimStart',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  }
]

module.exports = {
  stringMethods,
  arrayMethods
}