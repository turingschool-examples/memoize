const arrayPrototypes = [
   {
      "prototypeName":"Fill",
      "useCase":"The fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.",
      "typeOfMethod":"Mutator",
      "returnValue":"The modfied array",
      "maxNumberOfParameters":3
   },
   {
      "prototypeName":"Pop",
      "useCase":"The pop() method removes the last element from an array and returns that element. This method changes the length of the array.",
      "typeOfMethod":"Mutator",
      "returnValue":"The removed element from the array; undefined if the array is empty.",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"Push",
      "useCase":"The push() method adds one or more elements to the end of an array",
      "typeOfMethod":"Mutator",
      "returnValue":"The new length property of the object upon which the method was called.",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"Reverse",
      "useCase":"Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.",
      "typeOfMethod":"Mutator",
      "returnValue":"The reversed array.",
      "maxNumberOfParameters":0
   },
   {
      "prototypeName":"Shift",
      "useCase":"The shift() method removes the first element from an array",
      "typeOfMethod":"Mutator",
      "returnValue":"The removed element from the array; undefined if the array is empty.",
      "maxNumberOfParameters":0
   },
   {
      "prototypeName":"Sort",
      "useCase":"Sorts the elements of an array in place",
      "typeOfMethod":"Mutator",
      "returnValue":"The sorted array. Note that the array is sorted in place, and no copy is made.",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"Splice",
      "useCase":"The splice() method changes the contents of an array by removing existing elements and/or adding new elements.",
      "typeOfMethod":"Mutator",
      "returnValue":"An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.",
      "maxNumberOfParameters":3
   },
   {
      "prototypeName":"Unshift",
      "useCase":"The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.",
      "typeOfMethod":"Mutator",
      "returnValue":"The new length property of the object upon which the method was called.",
      "maxNumberOfParameters":"X number of Elements"
   },
   {
      "prototypeName":"Concat",
      "useCase":"The concat() method is used to merge two or more arrays.",
      "typeOfMethod":"Accessor",
      "returnValue":"Returns a new array comprised of this array joined with other array(s) and/or value(s).",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"Includes",
      "useCase":"The includes() method determines whether an array includes a certain element",
      "typeOfMethod":"Accessor",
      "returnValue":"A Boolean which is true if the value searchElement is found within the array (or the part of the array beginning at the index fromIndex, if specified).",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"indexOf",
      "useCase":"indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).",
      "typeOfMethod":"Accessor",
      "returnValue":"The first index of the element in the array; -1 if not found.",
      "maxNumberOfParameters":2
   },
   {
      "prototypeName":"Join",
      "useCase":"The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.",
      "typeOfMethod":"Accessor",
      "returnValue":"A string with all array elements joined. If arr.length is 0, the empty string is returned.",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"Slice",
      "useCase":"Extracts a section of an array",
      "typeOfMethod":"Accessor",
      "returnValue":"A new array containing the extracted elements.",
      "maxNumberOfParameters":2
   },
   {
      "prototypeName":"toString",
      "useCase":"The toString() method returns a string representing the specified array and its elements.",
      "typeOfMethod":"Accessor",
      "returnValue":"A string representingthe elements of the array",
      "maxNumberOfParameters":0
   },
   {
      "prototypeName":"Every",
      "useCase":"The every() method tests whether all elements in the array pass the test implemented by the provided function.",
      "typeOfMethod":"Iterator",
      "returnValue":"true if the callback function returns a truthy value for every array element; otherwise, false.",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"Filter",
      "useCase":"The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
      "typeOfMethod":"Iterator",
      "returnValue":"A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"findIndex",
      "useCase":"The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.",
      "typeOfMethod":"Iteration",
      "returnValue":"An index in the array if an element passes the test; otherwise, -1.",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"forEach",
      "useCase":"The forEach() method executes a provided function once for each array element.",
      "typeOfMethod":"Iteration",
      "returnValue":"undefined",
      "maxNumberOfParameters":5
   },
   {
      "prototypeName":"Keys",
      "useCase":"The keys() method returns a new Array Iterator object that contains the keys for each index in the array.",
      "typeOfMethod":"Iteration",
      "returnValue":"A new Array iterator object",
      "maxNumberOfParameters":0
   },
   {
      "prototypeName":"Map",
      "useCase":"The map() method creates a new array with the results of calling a provided function on every element in the calling array.",
      "typeOfMethod":"Iteration",
      "returnValue":"A new array with each element being the result of the callback function.",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"Reduce",
      "useCase":"Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.",
      "typeOfMethod":"Iteration",
      "returnValue":"The value that results from the reduction.",
      "maxNumberOfParameters":2
   },
   {
      "prototypeName":"Some",
      "useCase":"The some() method tests whether at least one element in the array passes the test implemented by the provided function.",
      "typeOfMethod":"Iteration",
      "returnValue":"true if the callback function returns a truthy value for any array element; otherwise, false.",
      "maxNumberOfParameters":1
   },
   {
      "prototypeName":"Values",
      "useCase":"The values() method returns a new Array Iterator object that contains the values for each index in the array.",
      "typeOfMethod":"Iteration",
      "returnValue":"A new Array iterator object.",
      "maxNumberOfParameters":0
   },
   {
      "prototypeName":"copyWithin",
      "useCase":"Copies a sequence of array elements within the array.",
      "typeOfMethod":"Mutator",
      "returnValue":"The modfied array",
      "maxNumberOfParameters":3
   },
   {
      "prototypeName":"toLocaleSrting",
      "useCase":"The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).",
      "typeOfMethod":"Accessor",
      "returnValue":"A string representing the elements of the array.",
      "maxNumberOfParameters":2
   }
];


module.exports = { arrayPrototypes };