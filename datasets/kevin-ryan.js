const usefulJavascript = [
  {
    "name": "length",
    "type": "property",
    "question": "What does array.length() return?",
    "answer1": "The last element in the array",
    "answer2": "The number of elements in an array",
    "answer3": "Five meowing kittens",
    "correct": "The number of elements in an array",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length"
  }, 

  {
    "name": "filter",
    "type": "iterator",
    "question": "filter() returns",
    "answer1": "an array of the exact same length",
    "answer2": "a subset of the original array",
    "answer3": "a sack of left handed gloves",
    "correct": "a subset of the original array",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
  }, 

  {
    "name": "map",
    "type": "iterator",
    "question": "map() is an _____ method",
    "answer1": "iterator",
    "answer2": "mutator",
    "answer3": "accessor",
    "correct": "iterator",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
  }, 

  {
    "name": "forEach",
    "type": "iterator",
    "question": "forEach() returns",
    "answer1": "a single value",
    "answer2": "false",
    "answer3": "nothing",
    "correct": "nothing",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
  }, 

  {
    "name": "find",
    "type": "iterator",
    "question": "What does find() return?",
    "answer1": "A mutated version of the original array",
    "answer2": "Nothing",
    "answer3": "The first value that evaluates to true",
    "correct": "The first value that evaluates to true",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
  }, 

  {
    "name": "reduce",
    "type": "iterator",
    "question": "What does reduce take in?",
    "answer1": "Orphaned puppies",
    "answer2": "current value and a callback function",
    "answer3": "initial value, callback function, accumulator, current value",
    "correct": "initial value, callback function, accumulator, current value",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
  }, 

  {
    "name": "object.Keys",
    "type": "object prototype",
    "question": "What does Object.keys() return?",
    "answer1": "an object of keys",
    "answer2": "an array of values",
    "answer3": "an array of keys",
    "correct": "an array of keys",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
  }, 

  {
    "name": "Object.assign",
    "type": "object prototype",
    "question": "Object.assign()",
    "answer1": "copies contents of two or more objects into a new object",
    "answer2": "returns true",
    "answer3": "assigns a new array to an object",
    "correct": "copies contents of two or more objects into a new object",

    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"
  }, 

  {
    "name": "unshift",
    "type": "mutator",
    "question": "unshift()",
    "answer1": "removes the first element in an array",
    "answer2": "adds a new element to the first index in an array",
    "answer3": "unshifts the previously shifted order of an array",
    "correct": "removes the first element in an array",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"
  }, 

  {
    "name": "reverse",
    "type": "mutator",
    "question": "You might use reverse() to",
    "answer1": "change your answer to this question",
    "answer2": "change the order of an array making the first element last and the last first",
    "answer3": "iterate through an array starting at the end",
    "correct": "change the order of an array making the first element last and the last first",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
  }, 

  {
    "name": "shift",
    "type": "mutator",
    "question": "shift()",
    "answer1": "removes the first element in an array",
    "answer2": "adds a new element to the first index in an array",
    "answer3": "shifts the order of an array",
    "correct": "removes the first element in an array",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
  }, 

  {
    "name": "pop",
    "type": "mutator",
    "question": "pop()",
    "answer1": "creates a pop-up window",
    "answer2": "turns an array into an object",
    "answer3": "removes the last element in an array",
    "correct": "removes the last element in an array",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
  }, 

  {
    "name": "push",
    "type": "mutator",
    "question": "push()",
    "answer1": "empties the contents of an array; pushes it out",
    "answer2": "returns the new length of an array after adding elements to the end",
    "answer3": "pushes new elements into an array, into random indexes",
    "correct": "returns new length of an array after adding elements to the end",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
  }, 

  {
    "name": "splice",
    "type": "mutator",
    "question": "splice()",
    "answer1": "splits an array into two new arrays",
    "answer2": "changes an array by removing or adding elements",
    "answer3": "finds and returns the true middle element in an array",
    "correct": "changes an array by removing or adding elements",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
  }, 

  {
    "name": "sort",
    "type": "mutator",
    "question": "sort()",
    "answer1": "orders the elements in an array in place and returns the new array",
    "answer2": "only orders numerical elements in an array and returns the new array",
    "answer3": "randomizes the elements of an array and returns the new array",
    "correct": "orders the elements in an array in place and returns the new array",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
  }, 

  {
    "name": "includes",
    "type": "accessor",
    "question": "includes()",
    "answer1": "creates a new element to be included in an array",
    "answer2": "determines whether an element exists in an array and returns true or false",
    "answer3": "returns a new array that includes only the elements passed into the callback function",
    "correct": "determines whether an element exists in an array and returns true or false",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
  }, 

  {
    "name": "concat",
    "type": "accessor",
    "question": "concat()",
    "answer1": "links two or more arrays into one",
    "answer2": "will swindle you out of your retirement savings",
    "answer3": "will link arrays with objects into a new super array object",
    "correct": "links two or more arrays into one",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
  }, 

  {
    "name": "indexOf",
    "type": "accessor",
    "question": "indexOf()",
    "answer1": "finds the element that matches the index passed in",
    "answer2": "places an element in the index specified",
    "answer3": "returns the index of the string passed in",
    "correct": "finds the element that matches the index passed in",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"
  }, 

  {
    "name": "join",
    "type": "accessor",
    "question": "join()",
    "answer1": "allows you to join anything you want; it is very inclusive",
    "answer2": "concatenates all of the elements in an array to a single string",
    "answer3": "joins two or more arrays together",
    "correct": "concatenates all of the elements in an array to a single string",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
  }, 

  {
    "name": "slice",
    "type": "accessor",
    "question": "slice()",
    "answer1": "changes an array by removing or adding elements",
    "answer2": "finds and returns the true middle element in an array",
    "answer3": "returns a new array determined by start and end parameters",
    "correct": "returns a new array determined by start and end parameters",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
  }, 

  {
    "name": "toString",
    "type": "accessor",
    "question": "toString()",
    "answer1": "converts only number values to a string",
    "answer2": "converts the elements of an array to a string",
    "answer3": "finds and returns the first string in an array",
    "correct": "converts the elements of an array to a string",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"
  }, 

  {
    "name": "spread",
    "type": "operator",
    "question": "the spread operator",
    "answer1": "inserts space between elements in an array to make it more readable",
    "answer2": "converts letters of a string into independent letter elements",
    "answer3": "organizes data types into groups of like data types",
    "correct": "converts letters of a string into independent letter elements",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
  }, 

  {
    "name": "this",
    "type": "operator",
    "question": "this",
    "answer1": "is the same in both ES5 and ES6",
    "answer2": "can only be used in constructor functions",
    "answer3": "is a way to refer to the context in which you are currently working",
    "correct": "is a way to refer to the context in which you are currently working",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  }, 

  {
    "name": "typeOf",
    "type": "operator",
    "question": "typeOf()",
    "answer1": "returns a string that identifies the specified data type",
    "answer2": "describes the uses for the specified data type",
    "answer3": "converts an array into the type of data type specified",
    "correct": "returns a string that identifies the specified data type",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"
  }, 

  {
    "name": "comparison",
    "type": "operator",
    "question": "identify the comparison operator",
    "answer1": " = ",
    "answer2": " !== ",
    "answer3": "compare()",
    "correct": " !== ",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators"
  }, 

  {
    "name": "toUppperCase",
    "type": "string",
    "question": "toUpperCase()",
    "answer1": "checks for correct capitalization",
    "answer2": "converts a string to upper case letters",
    "answer3": "converts a github issue to the most important issue",
    "correct": "converts a string to upper case letters",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"
  }, 

  {
    "name": "toLowerCase",
    "type": "string",
    "question": "toLowerCase()",
    "answer1": "checks yelp for the best pizza in Denver",
    "answer2": "converts a string to lower case letters",
    "answer3": "finds and returns all lower case letters in a string",
    "correct": "converts a string to lower case letters",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"
  }, 

  {
    "name": "charAt",
    "type": "string",
    "question": "charAt()",
    "answer1": "returns a string that identifies the a character data type",
    "answer2": "returns a string that identifies the character at the specified index",
    "answer3": "returns the first and last characters in a string",
    "correct": "returns a string that identifies the character at the specified index",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"
  }, 

  {
    "name": "startsWith",
    "type": "string",
    "question": "startsWith()",
    "answer1": "returns true or false",
    "answer2": "determines the first letter in each word of a string",
    "answer3": "orders the letters of a string into alphabetical order",
    "correct": "returns true or false",
    "more": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith"
  }
]

module.exports = { usefulJavascript };