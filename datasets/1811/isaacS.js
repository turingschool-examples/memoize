const isData = [
{
"id": 1,
"prototype": "shift()",
"answer": "Removes and returns the first item in an Array",
"incorrectChoices": [
"pop()",
"push()",
"unshift()"
],
"method": "mutator",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
},
{
"id": 2,
"prototype": "copyWithin()",
"answer": "Shallow copies part of an array to another location in the same array and returns it, without modifying its size",
"incorrectChoices": [
"splice()",
"findIndex()",
"concat()"
],
"method": "mutator",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
},
{
"id": 3,
"prototype": "fill()",
"answer": "Fills all the elements of an array from a start index to an end index with a static value. If the end index is not included, it will modify all the elements from the start index to the end of the array. It returns the modified array",
"incorrectChoices": [
"some()",
"values()",
"join()"
],
"method": "mutator",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"
},
{
"id": 4,
"prototype": "pop()",
"answer": "Removes the last element from an array and returns that element. This method changes the length of the array",
"incorrectChoices": [
"push()",
"unshift()",
"reverse()"
],
"method": "mutator",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
},
{
"id": 5,
"prototype": "push()",
"answer": "Adds one or more elements to the end of an array and returns the new length of the array.",
"incorrectChoices": [
"pop()",
"shift()",
"splice()"
],
"method": "mutator",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
},
{
"id": 6,
"prototype": "reverse()",
"answer": "Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.",
"incorrectChoices": [
"sory()",
"entries()",
"splice()"
],
"method": "mutator",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
},
{
"id": 7,
"prototype": "sort()",
"answer": "Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.",
"incorrectChoices": [
"includes()",
"fliter()",
"find()"
],
"method": "mutator",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
},
{
"id": 8,
"prototype": "splice()",
"answer": "Changes the contents of an array by removing or replacing existing elements and/or adding new elements.",
"incorrectChoices": [
"slice()",
"includes()",
"unshift()"
],
"method": "mutator",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
},
{
"id": 9,
"prototype": "unshift()",
"answer": "Adds one or more elements to the beginning of an array and returns the new length of the array.",
"incorrectChoices": [
"shift()",
"pop()",
"splice()"
],
"method": "mutator",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"
},
{
"id": 10,
"prototype": "entries()",
"answer": "Returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
"incorrectChoices": [
"includes()",
"indexOf()",
"concat()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries"
},
{
"id": 11,
"prototype": "filter()",
"answer": "Creates a new array with all elements that pass the test implemented by the provided function.",
"incorrectChoices": [
"findIndex()",
"forEach()",
"keys()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
},
{
"id": 12,
"prototype": "every()",
"answer": "Tests whether all elements in the array pass the test implemented by the provided function.",
"incorrectChoices": [
"map()",
"reduce()",
"filter()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
},
{
"id": 13,
"prototype": "filter()",
"answer": "Creates a new array with all elements that pass the test implemented by the provided function.",
"incorrectChoices": [
"splice()",
"includes()",
"reduce()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
},
{
"id": 14,
"prototype": "find()",
"answer": "Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.",
"incorrectChoices": [
"findIndex()",
"filter()",
"includes()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
},
{
"id": 15,
"prototype": "findIndex()",
"answer": "Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.",
"incorrectChoices": [
"find()",
"keys()",
"includes()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
},
{
"id": 16,
"prototype": "forEach()",
"answer": "Executes a provided function once for each array element.",
"incorrectChoices": [
"map()",
"reduce()",
"splice()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
},
{
"id": 17,
"prototype": "keys()",
"answer": "Returns a new Array Iterator object that contains the keys for each index in the array.",
"incorrectChoices": [
"some()",
"values()",
"map()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys"
},
{
"id": 18,
"prototype": "map()",
"answer": "Creates a new array with the results of calling a provided function on every element in the calling array.",
"incorrectChoices": [
"forEach()",
"reduce()",
"find()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
},
{
"id": 19,
"prototype": "reduce()",
"answer": "Executes a reducer function (that you provide) on each member of the array resulting in a single output value.",
"incorrectChoices": [
"splice()",
"join()",
"copyWithin()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
},
{
"id": 20,
"prototype": "reduceRight()",
"answer": "Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.",
"incorrectChoices": [
"reduce()",
"reverse()",
"slice()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight"
},
{
"id": 21,
"prototype": "some()",
"answer": "Tests whether at least one element in the array passes the test implemented by the provided function.",
"incorrectChoices": [
"every()",
"includes()",
"filter()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
},
{
"id": 22,
"prototype": "values()",
"answer": "Returns a new Array Iterator object that contains the values for each index in the array.",
"incorrectChoices": [
"keys()",
"includes()",
"indexOf()"
],
"method": "iteration",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values"
},
{
"id": 23,
"prototype": "concat()",
"answer": "Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
"incorrectChoices": [
"includes()",
"join()",
"splice()"
],
"method": "accessor",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
},
{
"id": 24,
"prototype": "includes()",
"answer": "Determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
"incorrectChoices": [
"filter()",
"toString()",
"find()"
],
"method": "accessor",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
},
{
"id": 25,
"prototype": "indexOf()",
"answer": "Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
"incorrectChoices": [
"keys()",
"map()",
"sort()"
],
"method": "accessor",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
},
{
"id": 26,
"prototype": "join()",
"answer": "Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.",
"incorrectChoices": [
"concat()",
"slice()",
"shift()"
],
"method": "accessor",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
},
{
"id": 27,
"prototype": "lastIndexOf()",
"answer": "Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.",
"incorrectChoices": [
"indexOf()",
"reverse()",
"every()"
],
"method": "accessor",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf"
},
{
"id": 28,
"prototype": "slice()",
"answer": "Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.",
"incorrectChoices": [
"keys()",
"sort()",
"unshift()"
],
"method": "accessor",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
},
{
"id": 29,
"prototype": "toSource()",
"answer": "Returns a string representing the source code of the array.",
"incorrectChoices": [
"entries()",
"some()",
"values()"
],
"method": "accessor",
"link": ""
},
{
"id": 30,
"prototype": "toString()",
"answer": "Returns a string representing the specified array and its elements.",
"incorrectChoices": [
"find()",
"entries()",
"shift()"
],
"method": "accessor",
"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString"
}
]

module.exports = { isData }