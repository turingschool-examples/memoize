const flashcardData = [
 {
   "id": 1,
   "question": "Which method copies a sequence of array elements within the array?",
   "answer": ".copyWithin()",
   "type": "mutator",
   "syntax": "arr.copyWithin(target[, start[, end]])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin",
   "correct": false 
 },
 {
   "id": 2,
   "question": "Which method fills all the elements of an array from a start index to an end index with a static value?",
   "answer": ".fill()",
   "type": "mutator",
   "syntax": "arr.fill(value[, start[, end]])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",
   "correct": false 
 },
 {
   "id": 3,
   "question": "Which method removes the last element from an array and returns that element?",
   "answer": ".pop()",
   "type": "mutator",
   "syntax": "arr.pop()",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
   "correct": false 
 },
 {
   "id": 4,
   "question": "Which method adds one or more elements to the end of an array and returns the new length of the array?",
   "answer": ".push()",
   "type": "mutator",
   "syntax": "arr.push(element1[, ...[, elementN]])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
   "correct": false 
 },
 {
   "id": 5,
   "question": "Which method reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first?",
   "answer": ".reverse()",
   "type": "mutator",
   "syntax": "a.reverse()",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
   "correct": false 
 },
 {
   "id": 6,
   "question": "Which method removes the first element from an array and returns that element?",
   "answer": ".shift()",
   "type": "mutator",
   "syntax": "arr.shift()",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
   "correct": false 
 },
 {
   "id": 7,
   "question": "Which method sorts the elements of an array in place and returns the array?",
   "answer": ".sort()",
   "type": "mutator",
   "syntax": "arr.sort([compareFunction])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
   "correct": false 
 },
 {
   "id": 8,
   "question": "Which method adds and/or removes elements from an array?",
   "answer": ".splice()",
   "type": "mutator",
   "syntax": "array.splice(start[, deleteCount[, item1[, item2[, ...]]]])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
   "correct": false 
 },
 {
   "id": 9,
   "question": "Which method adds one or more elements to the front of an array and returns the new length of the array?",
   "answer": ".unshift()",
   "type": "mutator",
   "syntax": "arr.unshift(element1[, ...[, elementN]])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
   "correct": false 
 },
 {
   "id": 10,
   "question": "This method returns a new array that is this array joined with other array(s) and/or value(s).",
   "answer": ".concat()",
   "type": "accessor",
   "syntax": "var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
   "correct": false 
 },
 {
   "id": 11,
   "question": "This method determines whether an array contains a certain element, returning true or false as appropriate.",
   "answer": ".includes()",
   "type": "accessor",
   "syntax": "arr.includes(valueToFind[, fromIndex])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
   "correct": false 
 },
 {
   "id": 12,
   "question": "This method returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.",
   "answer": ".indexOf()",
   "type": "accessor",
   "syntax": "arr.indexOf(searchElement[, fromIndex])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
   "correct": false 
 },
 {
   "id": 13,
   "question": "This method joins all elements of an array into a string.",
   "answer": ".join()",
   "type": "accessor",
   "syntax": "arr.join([separator])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
   "correct": false 
 },
 {
   "id": 14,
   "question": "This method returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.",
   "answer": ".lastIndexOf()",
   "type": "accessor",
   "syntax": "arr.lastIndexOf(searchElement, fromIndex)",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
   "correct": false 
 },
 {
   "id": 15,
   "question": "This method extracts a section of an array and returns a new array.",
   "answer": ".slice()",
   "type": "accessor",
   "syntax": "arr.slice([begin[, end]])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
   "correct": false 
 },
 {
   "id": 16,
   "question": "This method returns a string representing the array and its elements.",
   "answer": ".toString()",
   "type": "accessor",
   "syntax": "arr.toString()",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString",
   "correct": false 
 },
 {
   "id": 17,
   "question": "This method returns a localized string representing the array and its elements.",
   "answer": ".toLocaleString()",
   "type": "accessor",
   "syntax": "arr.toLocaleString([locales[, options]]);",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString",
   "correct": false 
 },
 {
   "id": 18,
   "question": "What method returns a new Array Iterator object that contains the key/value pairs for each index in the array?",
   "answer": ".entries()",
   "type": "iteration",
   "syntax": "array.entries()",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries",
   "correct": false 
 },
 {
   "id": 19,
   "question": "What method returns true if every element in this array satisfies the provided testing function?",
   "answer": ".every()",
   "type": "iteration",
   "syntax": "arr.every(callback(element[, index[, array]])[, thisArg])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
   "correct": false 
 },
 {
   "id": 20,
   "question": "What method creates a new array with all of the elements of this array for which the provided filtering function returns true?",
   "answer": ".filter()",
   "type": "iteration",
   "syntax": "var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
   "correct": false 
 },
 {
   "id": 21,
   "question": "What method returns the found value in the array? (if an element in the array satisfies the provided testing function or undefined if not found)",
   "answer": ".find()",
   "type": "iteration",
   "syntax": "arr.find(callback[, thisArg])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
   "correct": false 
 },
 {
   "id": 22,
   "question": "What method returns the found index in the array? (if an element in the array satisfies the provided testing function or -1 if not found)",
   "answer": ".findIndex()",
   "type": "iteration",
   "syntax": "arr.findIndex(callback(element[, index[, array]])[, thisArg])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",
   "correct": false 
 },
 {
   "id": 23,
   "question": "What method calls a function for each element in the array?",
   "answer": ".forEach()",
   "type": "iteration",
   "syntax": "arr.forEach(callback(currentValue[, index[, array]]) {iterator}[, thisArg])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
   "correct": false 
 },
 {
   "id": 24,
   "question": "What method returns a new Array Iterator that contains the keys for each index in the array?",
   "answer": ".keys()",
   "type": "iteration",
   "syntax": "arr.keys()",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys",
   "correct": false 
 },
 {
   "id": 25,
   "question": "What method creates a new array with the results of calling a provided function on every element in this array?",
   "answer": ".map()",
   "type": "iteration",
   "syntax": "arr.map(callback(currentValue[, index[, array]]) {return element}[, thisArg])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
   "correct": false 
 },
 {
   "id": 26,
   "question": "What method can be used to apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single new value?",
   "answer": ".reduce()",
   "type": "iteration",
   "syntax": "arr.reduce(callback[, initialValue])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
   "correct": false 
 },
 {
   "id": 27,
   "question": "What method can be used to apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value?",
   "answer": ".reduceRight()",
   "type": "iteration",
   "syntax": "arr.reduceRight(callback[, initialValue])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight",
   "correct": false 
 },
 {
   "id": 28,
   "question": "What method returns true if at least one element in this array satisfies the provided testing function?",
   "answer": ".some()",
   "type": "iteration",
   "syntax": "arr.some(callback(element[, index[, array]])[, thisArg])",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
   "correct": false 
 },
 {
   "id": 29,
   "question": "What method returns a new Array Iterator object that contains the values for each index in the array?",
   "answer": ".values()",
   "type": "iteration",
   "syntax": "arr.values()",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values",
   "correct": false 
 },
 {
   "id": 30,
   "question": "These methods directly modify the existing array. (often used for adding/removing/sorting)",
   "answer": "mutator method",
   "type": "mutator",
   "syntax": " ",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype",
   "correct": false 
 },
 {
   "id": 31,
   "question": "These methods do not modify the array and return a particular representation of the array.",
   "answer": "accessor method",
   "type": "accessor",
   "syntax": " ",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype",
   "correct": false 
 },
 {
   "id": 32,
   "question": "These methods loop through the existing array and apply a callback function to mutate each element and return a new value at that index.",
   "answer": "iteration method",
   "type": "iteration",
   "syntax": " ",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype",
   "correct": false 
 }
]

module.exports = {
  flashcardData
};