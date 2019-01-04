const flashcardData = [
 {
   "answer": ".copyWithin()",
   "syntax": "arr.copyWithin(target[, start[, end]])",
   "question": "Which method copies a sequence of array elements within the array?",
   "id": 1,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin",
   "correct": false 
 },
 {
   "answer": ".fill()",
   "syntax": "arr.fill(value[, start[, end]])",
   "question": "Which method fills all the elements of an array from a start index to an end index with a static value?",
   "id": 2,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",
   "correct": false 
 },
 {
   "answer": ".pop()",
   "syntax": "arr.pop()",
   "question": "Which method removes the last element from an array and returns that element?",
   "id": 3,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
   "correct": false 
 },
 {
   "answer": ".push()",
   "syntax": "arr.push(element1[, ...[, elementN]])",
   "question": "Which method adds one or more elements to the end of an array and returns the new length of the array?",
   "id": 4,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
   "correct": false 
 },
 {
   "answer": ".reverse()",
   "syntax": "a.reverse()",
   "question": "Which method reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first?",
   "id": 5,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
   "correct": false 
 },
 {
   "answer": ".shift()",
   "syntax": "arr.shift()",
   "question": "Which method removes the first element from an array and returns that element?",
   "id": 6,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
   "correct": false 
 },
 {
   "answer": ".sort()",
   "syntax": "arr.sort([compareFunction])",
   "question": "Which method sorts the elements of an array in place and returns the array?",
   "id": 7,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
   "correct": false 
 },
 {
   "answer": ".splice()",
   "syntax": "array.splice(start[, deleteCount[, item1[, item2[, ...]]]])",
   "question": "Which method adds and/or removes elements from an array?",
   "id": 8,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
   "correct": false 
 },
 {
   "answer": ".unshift()",
   "syntax": "arr.unshift(element1[, ...[, elementN]])",
   "question": "Which method adds one or more elements to the front of an array and returns the new length of the array?",
   "id": 9,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
   "correct": false 
 },
 {
   "answer": ".concat()",
   "syntax": "var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])",
   "question": "This method returns a new array that is this array joined with other array(s) and/or value(s).",
   "id": 10,
   "type": "accessor",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
   "correct": false 
 },
 {
   "answer": ".includes()",
   "syntax": "arr.includes(valueToFind[, fromIndex])",
   "question": "This method determines whether an array contains a certain element, returning true or false as appropriate.",
   "id": 11,
   "type": "accessor",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
   "correct": false 
 },
 {
   "answer": ".indexOf()",
   "syntax": "arr.indexOf(searchElement[, fromIndex])",
   "question": "This method returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.",
   "id": 12,
   "type": "accessor",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
   "correct": false 
 },
 {
   "answer": ".join()",
   "syntax": "arr.join([separator])",
   "question": "This method joins all elements of an array into a string.",
   "id": 13,
   "type": "accessor",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
   "correct": false 
 },
 {
   "answer": ".lastIndexOf()",
   "syntax": "arr.lastIndexOf(searchElement, fromIndex)",
   "question": "This method returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.",
   "id": 14,
   "type": "accessor",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
   "correct": false 
 },
 {
   "answer": ".slice()",
   "syntax": "arr.slice([begin[, end]])",
   "question": "This method extracts a section of an array and returns a new array.",
   "id": 15,
   "type": "accessor",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
   "correct": false 
 },
 {
   "answer": ".toString()",
   "syntax": "arr.toString()",
   "question": "This method returns a string representing the array and its elements.",
   "id": 16,
   "type": "accessor",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString",
   "correct": false 
 },
 {
   "answer": ".toLocaleString()",
   "syntax": "arr.toLocaleString([locales[, options]]);",
   "question": "This method returns a localized string representing the array and its elements.",
   "id": 17,
   "type": "accessor",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString",
   "correct": false 
 },
 {
   "answer": ".entries()",
   "syntax": "array.entries()",
   "question": "What method returns a new Array Iterator object that contains the key/value pairs for each index in the array?",
   "id": 18,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries",
   "correct": false 
 },
 {
   "answer": ".every()",
   "syntax": "arr.every(callback(element[, index[, array]])[, thisArg])",
   "question": "What method returns true if every element in this array satisfies the provided testing function?",
   "id": 19,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
   "correct": false 
 },
 {
   "answer": ".filter()",
   "syntax": "var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])",
   "question": "What method creates a new array with all of the elements of this array for which the provided filtering function returns true?",
   "id": 20,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
   "correct": false 
 },
 {
   "answer": ".find()",
   "syntax": "arr.find(callback[, thisArg])",
   "question": "What method returns the found value in the array? (if an element in the array satisfies the provided testing function or undefined if not found)",
   "id": 21,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
   "correct": false 
 },
 {
   "answer": ".findIndex()",
   "syntax": "arr.findIndex(callback(element[, index[, array]])[, thisArg])",
   "question": "What method returns the found index in the array? (if an element in the array satisfies the provided testing function or -1 if not found)",
   "id": 22,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",
   "correct": false 
 },
 {
   "answer": ".forEach()",
   "syntax": "arr.forEach(callback(currentValue[, index[, array]]) {iterator}[, thisArg])",
   "question": "What method calls a function for each element in the array?",
   "id": 23,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
   "correct": false 
 },
 {
   "answer": ".keys()",
   "syntax": "arr.keys()",
   "question": "What method returns a new Array Iterator that contains the keys for each index in the array?",
   "id": 24,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys",
   "correct": false 
 },
 {
   "answer": ".map()",
   "syntax": "arr.map(callback(currentValue[, index[, array]]) {return element}[, thisArg])",
   "question": "What method creates a new array with the results of calling a provided function on every element in this array?",
   "id": 25,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
   "correct": false 
 },
 {
   "answer": ".reduce()",
   "syntax": "arr.reduce(callback[, initialValue])",
   "question": "What method can be used to apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single new value?",
   "id": 26,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
   "correct": false 
 },
 {
   "answer": ".reduceRight()",
   "syntax": "arr.reduceRight(callback[, initialValue])",
   "question": "What method can be used to apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value?",
   "id": 27,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight",
   "correct": false 
 },
 {
   "answer": ".some()",
   "syntax": "arr.some(callback(element[, index[, array]])[, thisArg])",
   "question": "What method returns true if at least one element in this array satisfies the provided testing function?",
   "id": 28,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
   "correct": false 
 },
 {
   "answer": ".values()",
   "syntax": "arr.values()",
   "question": "What method returns a new Array Iterator object that contains the values for each index in the array?",
   "id": 29,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values",
   "correct": false 
 },
 {
   "answer": "mutator method",
   "syntax": " ",
   "question": "These methods directly modify the existing array. (often used for adding/removing/sorting)",
   "id": 30,
   "type": "mutator",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype",
   "correct": false 
 },
 {
   "answer": "accessor method",
   "syntax": " ",
   "question": "These methods do not modify the array and return a particular representation of the array.",
   "id": 31,
   "type": "accessor",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype",
   "correct": false 
 },
 {
   "answer": "iteration method",
   "syntax": " ",
   "question": "These methods loop through the existing array and apply a callback function to mutate each element and return a new value at that index.",
   "id": 32,
   "type": "iteration",
   "mdn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype",
   "correct": false 
 }
]

module.exports = {
  flashcardData
};