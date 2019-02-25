const TSquizzes = [
  {
    "id": 1,
    "question": "What kind of argument does the Object.keys() method take?",
    "answers": ["An array of keys", "A callback function", "An object"],
    "correctAnswer": "An object",
    "explanation": "Object.keys() will return an array containing each of the passed object's keys."
  },
  {
    "id": 2,
    "question": "If you had an object called 'pizza' with the properties 'toppings', 'size', and 'crust', how would you access the value of the 'size' property?",
    "answers": ["pizza[size]", "pizza.size", "pizza[size] or pizza.size"],
    "correctAnswer": "pizza[size] or pizza.size",
    "explanation": "Both bracket and dot notation may be used to access the value of a property on an object."
  },
  {
    "id": 3,
    "question": "If the array 'greeting' has a value of ['Hello', 'World'], and you wanted to return the string 'Hello World', which of the following would you call?",
    "answers": ["greeting.join()", "greeting.concat()", "greeting.join(' ')"],
    "correctAnswer": "greeting.join(' ')",
    "explanation": "Without a separator argument, .join() will return a string with the array’s elements separated by commas; .concat() joins the prototype on which its called with the arguments its passed."
  },
  {
    "id": 4,
    "question": "Which of the following array prototype methods does not modify the original array?",
    "answers": [".splice()", ".sort()", ".filter()"],
    "correctAnswer": ".filter()",
    "explanation": ".sort() rearranges the order of the array. .filter() returns a new array based on the criteria it’s passed."
  },
  {
    "id": 5,
    "question": "What happens if you don’t pass two elements for comparison through the .sort() method?",
    "answers": [".sort() will return a copy of the original array", ".sort() will return undefined", ".sort() will rearrange the elements according to their unicode code point values"],
    "correctAnswer": ".sort() will rearrange the elements according to their unicode code point values",
    "explanation": ".sort() can take a compare function, which itself takes two elements to compare."
  },
  {
    "id": 6,
    "question": "On which of the following prototypes can .includes() be called?",
    "answers": [ "Arrays", "Strings", "Arrays and Strings"],
    "correctAnswer": "Arrays and Strings",
    "explanation": "Whether .includes() is called on an array or a string, it takes an argument and will return a boolean."
  },
  {
    "id": 7,
    "question": "What does the .filter() method return?",
    "answers": ["A new array", "A boolean", "A modified array"],
    "correctAnswer": "A modified array",
    "explanation": ".filter() is an accessor method, which means it returns a new array of elements that meet the criteria of a callback function."
  },
  {
    "id": 8,
    "question": "What argument does the .filter() method require?", 
    "answers": ["A current element", "None", "A callback function"],
    "correctAnswer": "A callback function",
    "explanation": "Any elements that meet the criteria of the callback function will be returned to the new array. If no elements match the criteria, .filter() will return an empty array."
  },
  {
    "id": 9,
    "question": "Which of the following array prototype methods mutates the original array?",
    "answers": [".map()", ".filter()", ".sort()"],
    "correctAnswer": ".sort()",
    "explanation": ".map() and .filter() will return new arrays; .sort() modifies the original array by rearranging its elements."
  },
  {
    "id": 10,
    "question": "After 'current element', what is the optional argument that the method .forEach() can take?", 
    "answers": ["A callback function", "Another array", "Index"],
    "correctAnswer": "Index",
    "explanation": "This one is easy to forget, but it can be useful when you want to be able to target a specific element in an array."
  },
  {
    "id": 11,
    "question": "What does the .forEach() method return?", 
    "answers": ["A modified array", "A new array", "Undefined"],
    "correctAnswer": "Undefined",
    "explanation": ".forEach() iterates through each element in an array, but unlike iterator methods like .find(), .filter(), or .map(), it doesn’t return a value."
  },
  {
    "id": 12,
    "question": "What does the .map() method return?", 
    "answers": ["An array of indices (or keys)", "A merged array", "An array of the same length"],
    "correctAnswer": "An array of the same length",
    "explanation": ".map() returns a new array of the same length, but it does not modify the original array."
  },
  {
    "id": 13,
    "question": "What does the .reduce() method return?", 
    "answers": ["An element with the same data type as the element on which reduce was called", "A number", "Any primitive data type"],
    "correctAnswer": "Any primitive data type",
    "explanation": ".reduce() “reduces” an array to a single value, which can be an array, an object, a string, a number, undefined, a boolean, or null."
  },
  {
    "id": 14,
    "question": "What is happening under the hood of an iterator method?", 
    "answers": ["A constructor method", "An if/else statement", "A for loop"],
    "correctAnswer": "A for loop",
    "explanation": "Much like a for loop, an iterator method loops through each element in an array and performs a specific action."
  },
  {
    "id": 15,
    "question": "What does the .find() method return?", 
    "answers": ["An array of elements that are true", "The index of the first element that is true", "The first element that is true"],
    "correctAnswer": "The first element that is true",
    "explanation": "If you want an array of all the elements that evaluate to true, use a .filter() instead."
  },
  {
    "id": 16,
    "question": "What argument must the .find() method take?", 
    "answers": ["An index", "The element you’re looking for", "A callback function"],
    "correctAnswer": "A callback function",
    "explanation": "The callback function establishes a condition that evaluates to true or false."
  },
  {
    "id": 17,
    "question": "Which of the following array prototype methods removes an element from the end of an array?", 
    "answers": [".push()", ".shift()", ".pop()"],
    "correctAnswer": ".pop()",
    "explanation": "This one is kind of an onomatopoeia."
  },
  {
    "id": 18,
    "question": "Which of the following array prototype methods adds an element to the beginning of an array?", 
    "answers": [".shift()", ".insert()", ".unshift()"],
    "correctAnswer": ".unshift()",
    "explanation": ".insert() is not an array prototype method."
  },
  {
    "id": 19,
    "question": "What happens if you don’t pass a separator into the .join() method?", 
    "answers":["The method doesn’t return anything", "The method returns a shallow copy of the same array", "The method returns a string of the array elements separated by commas"],
    "correctAnswer": "The method returns a string of the array elements separated by commas",
    "explanation": "You can pass (' ') through .join() to separate elements with spaces."
  },
  {
    "id": 20,
    "question": "What does the method .concat() return?", 
    "answers":["An array of strings", "An array of objects", "A merged string or array"],
    "correctAnswer": "A merged string or array",
    "explanation": ".concat() will merge any arguments with the string or array that calls it."
  },
  {
    "id": 21,
    "question": "What arguments might the .slice() method take?", 
    "answers": ["The value of the element you wish to remove", "The value of the element you wish to add", "Values for the indices where you want your new array to begin and end"],
    "correctAnswer": "Values for the indices where you want your new array to begin and end",
    "explanation": "If you don’t pass any arguments, .slice() will begin at index 0 and return a shallow copy of the original array."
  },
  {
    "id": 22,
    "question": "What happens if you pass the value 2 through the .splice() method?", 
    "answers": ["The element at index 2 will be removed from the original array", "The first two elements will be removed from the array", "All elements beginning at index 2 will be removed from the original array"],
    "correctAnswer": "All elements beginning at index 2 will be removed from the original array",
    "explanation": "A second optional argument determines the number of elements to be removed from the original array. Further optional arguments will add those elements to the end of the original array."
  },
  {
    "id": 23,
    "question": "What argument must the .split() method take?",
    "answers": ["An empty string ('')", "A string separated by a space (' ')", "None"],
    "correctAnswer": "None",
    "explanation": "If you don’t pass an argument through .split(), it will return an array with a single element. If you pass (' ') through, it will return an array of elements that have been split by spaces. Passing an additional argument through will limit the number of elements in the returned array to the value of the second argument."
  },
  {
    "id": 24,
    "question": "What is the main difference between the methods .findIndex() and indexOf()?",
    "answers": [".indexOf() will return an array of indices of all elements that satisfy a condition", ".findIndex() will return an array of indices of all elements that satisfy a condition", ".findIndex() modifies the original array; indexOf() does not"],
    "correctAnswer": ".findIndex() modifies the original array; indexOf() does not",
    "explanation": "Both methods return the index of the first element in the array that satisfies a condition."
  },
  {
    "id": 25,
    "question": "What arguments does the .reduce() method take?",
    "answers": ["An accumulator and the current element", "An accumulator and the original array", "A callback function and an initial value"],
    "correctAnswer": "A callback function and an initial value",
    "explanation": "The second argument is optional, as it’s often an empty {}, [], ' ', or the number 0, but it may help you remember what it is you’re returning."
  },
  {
    "id": 26,
    "question": "What arguments must the callback function in the .reduce() method take?",
    "answers": ["An accumulator and its initial value", "Two elements for comparison", "An accumulator and the current element in the array"],
    "correctAnswer": "An accumulator and the current element in the array",
    "explanation": "Current index and the array on which .reduce() was called are optional arguments in the callback function."
  },
  {
    "id": 27,
    "question": "What must you never forget to do when using .reduce()?",
    "answers": ["Include the initial value as a second argument", "Use arrow syntax for the callback function", "Return the accumulator"] ,
    "correctAnswer": "Return the accumulator",
    "explanation": "If you don’t return the accumulator to the callback function, .reduce() will return undefined."
  },
  {
    "id": 28,
    "question": "What two arguments does the .replace() method take?",
    "answers": ["A callback function", "A callback function and the replacement", "The pattern to be replaced and the replacement"],
    "correctAnswer": "The pattern to be replaced and the replacement",
    "explanation": "The pattern can be a RegEx object or literal, or a string; the replacement can be a new substring or a function."
  },
  {
    "id": 29,
    "question": "If var x = /apples/gi and var y = apples/i, what would be the difference between calling string.replace(x, ‘oranges’) and string(y, ‘oranges’)?",
    "answers": ["Passing y would replace all instances of 'apples' with 'oranges'", "Passing x would replace the first instance of 'apples' with 'oranges'", "Passing x would replace all instance of 'apples' with 'oranges'"],
    "correctAnswer": "Passing x would replace all instance of 'apples' with 'oranges'",
    "explanation": "The /gi syntax replaces the pattern 'globally'"
  },
  {
    "id": 30,
    "question": "What is a callback function? ",
    "answers": ["A function that returns an array of the same length", "Any anonymous function", "A function passed through another function"],
    "correctAnswer": "A function passed through another function",
    "explanation": "A callback function is a required argument in many prototype methods, such as .filter(), .reduce(), and .find()."
  }
]

module.exports = { TSquizzes };